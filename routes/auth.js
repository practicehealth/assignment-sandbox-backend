import { Router } from "express";
import jwt from "jsonwebtoken";
import { tokenSecrets } from "../constants.js";

const availableEmails = ["abdul@gmail.com", "randal@gmail.com"];

export function createAuthRoutes() {
  const router = Router();

  router.get("/token", (req, res) => {
    const refreshToken = req.cookies["assignment-refresh-token"];
    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token not found" });
    }
    try {
      const decoded = jwt.verify(refreshToken, tokenSecrets.refreshToken);
      const email = decoded.email;
      const accessToken = jwt.sign({ email }, tokenSecrets.accessToken, {
        expiresIn: "5m",
      });
      res.json({ accessToken, email });
    } catch (error) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }
  });

  router.post("/login", (req, res) => {
    const email = req.body.email;
    if (!availableEmails.includes(email)) {
      return res.status(401).json({
        message: `use either of these emails ${availableEmails.join(", ")}`,
      });
    }
    const refreshToken = jwt.sign({ email }, tokenSecrets.refreshToken);
    const accessToken = jwt.sign({ email }, tokenSecrets.accessToken, {
      expiresIn: "5m",
    });
    res.cookie("assignment-refresh-token", refreshToken, { httpOnly: true });
    res.json({ accessToken, email });
  });
  router.post("/logout", (req, res) => {
    res.clearCookie("assignment-refresh-token");
    res.json({ message: "Logged out" });
  });

  // anything below these routes will require the accessToken to be in the header
  return router;
}
