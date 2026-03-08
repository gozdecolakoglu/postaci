import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { asyncHandler, HttpError } from "../shared/http";
import { signAuthToken } from "../shared/auth";

const prisma = new PrismaClient();
export const router = Router();

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const data = authSchema.parse(req.body);

    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existing) {
      throw new HttpError(409, "User already exists");
    }

    const passwordHash = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        fullName: data.email.split("@")[0],
        memberships: {
          create: {
            role: "OWNER",
            organization: {
              create: {
                name: "New Organization",
                slug: `org-${Date.now()}`,
              },
            },
          },
        },
      },
      include: {
        memberships: true,
      },
    });

    const primaryMembership = user.memberships[0];
    const token = signAuthToken({
      userId: user.id,
      organizationId: primaryMembership.organizationId,
      role: primaryMembership.role,
    });

    res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  }),
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const data = authSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { email: data.email },
      include: { memberships: true },
    });
    if (!user) {
      throw new HttpError(401, "Invalid credentials");
    }

    const match = await bcrypt.compare(data.password, user.passwordHash);
    if (!match) {
      throw new HttpError(401, "Invalid credentials");
    }

    const primaryMembership = user.memberships[0];
    const token = signAuthToken({
      userId: user.id,
      organizationId: primaryMembership.organizationId,
      role: primaryMembership.role,
    });

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  }),
);

router.post(
  "/forgot-password",
  asyncHandler(async (_req, res) => {
    // In real implementation, generate token and send email
    res.json({ status: "ok" });
  }),
);

router.post(
  "/reset-password",
  asyncHandler(async (_req, res) => {
    res.json({ status: "ok" });
  }),
);

router.post(
  "/verify-email",
  asyncHandler(async (_req, res) => {
    res.json({ status: "ok" });
  }),
);

router.post(
  "/2fa/verify",
  asyncHandler(async (_req, res) => {
    res.json({ status: "ok" });
  }),
);

