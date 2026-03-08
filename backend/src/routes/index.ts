import { Router } from "express";
import { router as authRouter } from "./auth";
import { router as usersRouter } from "./users";
import { router as contactsRouter } from "./contacts";
import { router as campaignsRouter } from "./campaigns";
import { router as workflowsRouter } from "./workflows";
import { router as analyticsRouter } from "./analytics";
import { router as billingRouter } from "./billing";
import { router as integrationsRouter } from "./integrations";
import { router as apiRouter } from "./keys";

export const router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/contacts", contactsRouter);
router.use("/campaigns", campaignsRouter);
router.use("/workflows", workflowsRouter);
router.use("/analytics", analyticsRouter);
router.use("/billing", billingRouter);
router.use("/integrations", integrationsRouter);
router.use("/keys", apiRouter);

