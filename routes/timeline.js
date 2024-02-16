import { Router } from "express";
import db from "../db/db.js";

export function createVisitRotues() {
  const router = Router();
  router.get("/", (req, res) => {
    try {
      const visits = db.getVisitsForUser(req.user.email);
      res.json({ data: visits, message: "Visits for user" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  router.post("/task/complete", (req, res) => {
    try {
      const { taskId, visitId, note } = req.body;
      if (!taskId || !visitId) throw new Error("Invalid taskId or visitId");
      db.completeTask(req.user.email, { taskId, visitId, note });
      res.json({ message: "Task completed" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  return router;
}
