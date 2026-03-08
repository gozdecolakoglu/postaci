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
    const campaigns = await prisma.campaign.findMany({
      where: { organizationId: orgId },
      take: 50,
      orderBy: { createdAt: "desc" },
    });
    res.json(campaigns);
  }),
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const orgId = req.auth!.organizationId;
    const { name, subject, fromName, fromEmail } = req.body as {
      name: string;
      subject: string;
      fromName: string;
      fromEmail: string;
    };
    const campaign = await prisma.campaign.create({
      data: {
        organizationId: orgId,
        name,
        subject,
        fromName,
        fromEmail,
      },
    });
    res.status(201).json(campaign);
  }),
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const orgId = req.auth!.organizationId;
    const campaign = await prisma.campaign.findFirst({
      where: { id: req.params.id, organizationId: orgId },
      include: {
        events: true,
      },
    });
    res.json(campaign);
  }),
);

