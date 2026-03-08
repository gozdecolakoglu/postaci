import { Router } from "express";
import { authMiddleware } from "../shared/auth";

export const router = Router();

router.use(authMiddleware);

router.get("/", (_req, res) => {
  // Static list of integrations as a starting point
  res.json([
    {
      id: "shopify",
      name: "Shopify",
      category: "E‑commerce",
      status: "disconnected",
    },
    {
      id: "magento",
      name: "Magento",
      category: "E‑commerce",
      status: "disconnected",
    },
    {
      id: "salesforce",
      name: "Salesforce",
      category: "CRM",
      status: "disconnected",
    },
  ]);
});

