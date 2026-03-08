import { Router } from "express";
import { PrismaClient } from "@prisma/client";
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
    const members = await prisma.membership.findMany({
      where: { organizationId: orgId },
      include: { user: true },
    });
    res.json(
      members.map((m) => ({
        id: m.id,
        role: m.role,
        user: {
          id: m.user.id,
          email: m.user.email,
          fullName: m.user.fullName,
        },
      })),
    );
  }),
);

router.patch(
  "/:membershipId/role",
  requireRole(["OWNER", "ADMIN"]),
  asyncHandler(async (req, res) => {
    const { membershipId } = req.params;
    const { role } = req.body as { role: string };
    const updated = await prisma.membership.update({
      where: { id: membershipId },
      data: { role: role as never },
    });
    res.json(updated);
  }),
);

