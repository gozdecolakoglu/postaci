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
    const contacts = await prisma.contact.findMany({
      where: { organizationId: orgId },
      take: 100,
      orderBy: { createdAt: "desc" },
    });
    res.json(contacts);
  }),
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const orgId = req.auth!.organizationId;
    const { email, firstName, lastName } = req.body as {
      email: string;
      firstName?: string;
      lastName?: string;
    };
    const contact = await prisma.contact.create({
      data: {
        organizationId: orgId,
        email,
        firstName,
        lastName,
      },
    });
    res.status(201).json(contact);
  }),
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const orgId = req.auth!.organizationId;
    const contact = await prisma.contact.findFirst({
      where: { id: req.params.id, organizationId: orgId },
      include: {
        lists: { include: { list: true } },
        tags: { include: { tag: true } },
        consentEvents: true,
        events: true,
      },
    });
    res.json(contact);
  }),
);

