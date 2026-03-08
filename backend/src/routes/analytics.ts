import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler } from "../shared/http";
import { authMiddleware } from "../shared/auth";

const prisma = new PrismaClient();
export const router = Router();

router.use(authMiddleware);

router.get(
  "/dashboard",
  asyncHandler(async (req, res) => {
    const orgId = req.auth!.organizationId;

    const [totalSent, totalOpens, totalClicks, subscribers] = await Promise.all([
      prisma.campaignEmailEvent.count({
        where: { campaign: { organizationId: orgId }, type: "SENT" },
      }),
      prisma.campaignEmailEvent.count({
        where: { campaign: { organizationId: orgId }, type: "OPENED" },
      }),
      prisma.campaignEmailEvent.count({
        where: { campaign: { organizationId: orgId }, type: "CLICKED" },
      }),
      prisma.contact.count({
        where: { organizationId: orgId, status: "ACTIVE" },
      }),
    ]);

    res.json({
      totalSent,
      totalOpens,
      totalClicks,
      subscribers,
    });
  }),
);

