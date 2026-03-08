import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler } from "../shared/http";
import { authMiddleware } from "../shared/auth";

const prisma = new PrismaClient();
export const router = Router();

router.use(authMiddleware);

router.get(
  "/subscription",
  asyncHandler(async (req, res) => {
    const orgId = req.auth!.organizationId;
    const subscription = await prisma.subscription.findFirst({
      where: { organizationId: orgId },
      include: { plan: true },
    });
    res.json(subscription);
  }),
);

