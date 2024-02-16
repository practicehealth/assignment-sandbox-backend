import { Router } from "express";
import db from "../db/db.js";
export function createCategoryRoutes() {
  const router = Router();

  // Get route for all categories
  const categories = [
    "medication",
    "labs",
    "vitals",
    "immunization",
    "condition",
    "procedure",
    "allergy",
  ];
  categories.forEach((category) => {
    router.get(`/${category}`, (req, res) => {
      try {
        // Handle logic for each category
        const response = {
          data: db.getCategoryForUser(req.user.email, category),
          message: `${category} category`,
        };
        res.json(response);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  });
  router.get("/info", async (req, res) => {
    try {
      const completion =
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

      res.writeHead(200, {
        "Content-Type": "text/json",
      });

      for await (const chunk of completion) {
        if (chunk == undefined) return res.end();
        await new Promise((resolve) => {
          setTimeout(resolve, 10);
        });
        await new Promise((resolve) => {
          res.write(chunk, "utf-8", () => {
            resolve(null);
          });
        });
      }

      return res.end();
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "something went wrong on our side" });
    }
  });

  return router;
}
