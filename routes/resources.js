import { Router } from "express";
import db from "../db/db.js";

export function createResourceRoutes() {
  const router = Router();
  router.get("/", (req, res) => {
    try {
      const resouces = db.getResourcesForUser(req.user.email);
      res.json({ data: resouces, message: "Visits for user" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  return router;
}
