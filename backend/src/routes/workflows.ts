import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler } from "../shared/http";
import { authMiddleware } from "../shared/auth";

const prisma = new PrismaClient();
export const router = Router();

router.use(authMiddleware);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const orgId = req.auth!.organizationId;
    const workflows = await prisma.automationWorkflow.findMany({
      where: { organizationId: orgId },
      take: 50,
      orderBy: { createdAt: "desc" },
    });
    res.json(workflows);
  }),
);

