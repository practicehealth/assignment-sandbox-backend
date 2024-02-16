import { Router } from "express";
import jwt from "jsonwebtoken";

const tokenSecrets = {
  accessToken: "accessTokenSecret",
  refreshToken: "refreshTokenSecret",
};

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

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    console.log(
      "access token not found for protected rotue\n------------------"
    );
    return res.status(401).json({ message: "Access token not found" });
  }
  jwt.verify(token, tokenSecrets.accessToken, (err, user) => {
    if (err) {
      console.log(
        "access token is tampered or expired send a new one\n------------------"
      );
      return res.status(401).json({
        message: "Access token is either tampered or expired, send a new one",
      });
    }
    req.user = user;
    next();
  });
};
