import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { asyncHandler } from "../shared/http";
import { authMiddleware, requireRole } from "../shared/auth";

const prisma = new PrismaClient();
export const router = Router();

router.use(authMiddleware);

router.get(
  "/",
  requireRole(["OWNER", "ADMIN"]),
  asyncHandler(async (req, res) => {
    const orgId = req.auth!.organizationId;
    const keys = await prisma.apiKey.findMany({
      where: { organizationId: orgId },
      orderBy: { createdAt: "desc" },
    });
    res.json(keys);
  }),
);

router.post(
  "/",
  requireRole(["OWNER", "ADMIN"]),
  asyncHandler(async (req, res) => {
    const orgId = req.auth!.organizationId;
    const { name } = req.body as { name: string };

    const apiKeyPlain = crypto.randomBytes(24).toString("hex");
    const keyHash = crypto
      .createHash("sha256")
      .update(apiKeyPlain)
      .digest("hex");

    const key = await prisma.apiKey.create({
      data: {
        organizationId: orgId,
        name,
        keyHash,
      },
    });

    res.status(201).json({
      ...key,
      // Only return plain value once
      plain: apiKeyPlain,
    });
  }),
);

