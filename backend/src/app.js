const express = require("express");
const { PrismaClient } = require("@prisma/client");
const argon2 = require("argon2");
const { z } = require("zod");
const crypto = require("node:crypto");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const prisma = new PrismaClient();
const allowedOrigin =
  process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// JSON verilerini okuyabilmek için
app.use(express.json());
app.use(cookieParser());
// 1. Sunucu kontrolü
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// 2. Kullanıcı kayıt kuralları
const registerSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().trim().toLowerCase(),
  password: z.string().min(8).max(128),
});

// 3. Kullanıcı kayıt API'si
app.post("/api/auth/register", async (req, res) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Geçersiz kayıt bilgileri.",
    });
  }

  const { name, email, password } = result.data;

  try {
    // Şifreyi güvenli biçimde hash'le
    const passwordHash = await argon2.hash(password);

    // Kullanıcıyı veritabanına kaydet
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return res.status(201).json({
      message: "Kayıt başarılı.",
      user,
    });
  } catch (error) {
    // Aynı e-posta zaten kayıtlıysa
    if (error.code === "P2002") {
      return res.status(409).json({
        message: "Bu e-posta zaten kayıtlı.",
      });
    }

    console.error("Kayıt hatası:", error);

    return res.status(500).json({
      message: "Sunucu hatası.",
    });
  }
});

// =====================================
// OTURUM AYARLARI
// =====================================

const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
};

function hashSessionToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

// =====================================
// LOGIN - KULLANICI GİRİŞİ
// =====================================

const loginSchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string().min(1),
});

app.post("/api/auth/login", async (req, res) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Geçersiz giriş bilgileri.",
    });
  }

  const { email, password } = result.data;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await argon2.verify(user.passwordHash, password))) {
      return res.status(401).json({
        message: "E-posta veya şifre hatalı.",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + SESSION_DURATION);

    await prisma.session.create({
      data: {
        id: hashSessionToken(token),
        userId: user.id,
        expiresAt,
      },
    });

    res.cookie("emlak360_session", token, {
      ...cookieOptions,
      maxAge: SESSION_DURATION,
    });

    return res.json({
      message: "Giriş başarılı.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Giriş hatası:", error);
    return res.status(500).json({ message: "Sunucu hatası." });
  }
});

// =====================================
// ME - GİRİŞ YAPAN KULLANICI
// =====================================

app.get("/api/auth/me", async (req, res) => {
  const token = req.cookies?.emlak360_session;

  if (!token) {
    return res.status(401).json({ message: "Giriş yapmalısınız." });
  }

  try {
    const session = await prisma.session.findUnique({
      where: { id: hashSessionToken(token) },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    if (!session || session.expiresAt <= new Date()) {
      res.clearCookie("emlak360_session", cookieOptions);
      return res.status(401).json({
        message: "Oturum geçersiz veya süresi dolmuş.",
      });
    }

    return res.json({ user: session.user });
  } catch (error) {
    console.error("Oturum hatası:", error);
    return res.status(500).json({ message: "Sunucu hatası." });
  }
});

// =====================================
// LOGOUT - ÇIKIŞ YAPMA
// =====================================

app.post("/api/auth/logout", async (req, res) => {
  const token = req.cookies?.emlak360_session;

  try {
    if (token) {
      await prisma.session.deleteMany({
        where: { id: hashSessionToken(token) },
      });
    }

    res.clearCookie("emlak360_session", cookieOptions);
    return res.json({ message: "Çıkış başarılı." });
  } catch (error) {
    console.error("Çıkış hatası:", error);
    return res.status(500).json({ message: "Sunucu hatası." });
  }
});
// =====================================
// YETKİLENDİRME - AUTH MIDDLEWARE
// =====================================

// Kullanıcının giriş yapıp yapmadığını kontrol eder.
async function requireAuth(req, res, next) {
  const token = req.cookies?.emlak360_session;

  if (!token) {
    return res.status(401).json({
      message: "Bu işlem için giriş yapmalısınız.",
    });
  }

  try {
    const session = await prisma.session.findUnique({
      where: { id: hashSessionToken(token) },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    if (!session || session.expiresAt <= new Date()) {
      res.clearCookie("emlak360_session", cookieOptions);

      return res.status(401).json({
        message: "Oturum geçersiz veya süresi dolmuş.",
      });
    }

    // Doğrulanan kullanıcıyı sonraki işlemlere aktarır.
    req.user = session.user;
    next();
  } catch (error) {
    console.error("Yetkilendirme hatası:", error);

    return res.status(500).json({
      message: "Sunucu hatası.",
    });
  }
}

// Yalnızca yöneticilerin erişmesine izin verir.
function requireAdmin(req, res, next) {
  if (req.user?.role !== "ADMIN") {
    return res.status(403).json({
      message: "Bu işlem için yönetici yetkisi gerekiyor.",
    });
  }

  next();
}

// =====================================
// KORUMALI API ENDPOINTLERİ
// =====================================

// Giriş yapan kullanıcı kendi profilini görebilir.
app.get("/api/users/profile", requireAuth, (req, res) => {
  return res.json({
    user: req.user,
  });
});

// Yalnızca ADMIN kullanıcıları listeleyebilir.
app.get("/api/admin/users", requireAuth, requireAdmin, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json({ users });
  } catch (error) {
    console.error("Kullanıcı listeleme hatası:", error);

    return res.status(500).json({
      message: "Sunucu hatası.",
    });
  }
});
// =====================================
// PROFİL GÜNCELLEME
// =====================================

const updateProfileSchema = z.object({
  name: z.string().trim().min(2).max(100),
});

app.patch("/api/users/profile", requireAuth, async (req, res) => {
  const result = updateProfileSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Geçersiz profil bilgileri.",
    });
  }

  try {
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { name: result.data.name },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return res.json({
      message: "Profil güncellendi.",
      user,
    });
  } catch (error) {
    console.error("Profil güncelleme hatası:", error);
    return res.status(500).json({
      message: "Sunucu hatası.",
    });
  }
});
// =====================================
// ŞİFRE DEĞİŞTİRME
// =====================================

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8).max(128),
});

app.patch("/api/users/password", requireAuth, async (req, res) => {
  const result = changePasswordSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Geçersiz şifre bilgileri.",
    });
  }

  const { currentPassword, newPassword } = result.data;

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({
        message: "Kullanıcı bulunamadı.",
      });
    }

    const validPassword = await argon2.verify(
      user.passwordHash,
      currentPassword
    );

    if (!validPassword) {
      return res.status(401).json({
        message: "Mevcut şifre hatalı.",
      });
    }

    if (currentPassword === newPassword) {
      return res.status(400).json({
        message: "Yeni şifre eskisinden farklı olmalıdır.",
      });
    }

    const passwordHash = await argon2.hash(newPassword);

    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { passwordHash },
      }),
      prisma.session.deleteMany({
        where: { userId: user.id },
      }),
    ]);

    res.clearCookie("emlak360_session", cookieOptions);

    return res.json({
      message: "Şifre değiştirildi. Lütfen tekrar giriş yapın.",
    });
  } catch (error) {
    console.error("Şifre değiştirme hatası:", error);

    return res.status(500).json({
      message: "Sunucu hatası.",
    });
  }
});
module.exports = {
  app,
  requireAuth,
  requireAdmin,
};
