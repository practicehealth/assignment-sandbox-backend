import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createAuthRoutes } from "./routes/auth.js";
import { authenticateToken } from "./middlewares/authenticate-middleware.js";
import { createVisitRotues } from "./routes/timeline.js";
import { createCategoryRoutes } from "./routes/categories.js";
import { routes, table } from "./routes/routes.js";
import { createResourceRoutes } from "./routes/resources.js";
import { loggerMiddleware } from "./middlewares/logger.js";
import { notFoundMiddleware } from "./middlewares/error-middlewares.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(loggerMiddleware);
app.get("/", (_, res) => {
  res.send(
    "This is test route if you're able to hit it, this means your server is running."
  );
});
app.get("/info", (req, res) => {
  if (req.headers["content-type"] == "application/json") {
    return res.json(routes);
  }
  return res.send(table);
});
app.use("/auth", createAuthRoutes());
app.use("/categories", authenticateToken, createCategoryRoutes());
app.use("/visits", authenticateToken, createVisitRotues());
app.use("/resources", authenticateToken, createResourceRoutes());
app.use(notFoundMiddleware);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port} with routes `);
});
