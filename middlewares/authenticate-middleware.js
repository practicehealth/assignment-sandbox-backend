import jwt from "jsonwebtoken";
import { tokenSecrets } from "../constants.js";

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
