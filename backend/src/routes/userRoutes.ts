import { Router, Request, Response } from "express";
import UserDAO from "../dao/user.dao";
import { User } from "../io/types";

const router = Router();
const userDAO = new UserDAO();

// POST /api/user
router.post("/", async (req: Request, res: Response) => {
  try {
    const body: User = {
      id: "1", // statico provvisorio
      username: "testUser",
      email: "test@example.com",
      password: "hashedPassword123",
    };

    const newUser = await userDAO.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Errore creazione utente" });
  }
});

// API future
router.post("/login", (req, res) => {
  res.status(501).json({ message: "Endpoint login non ancora implementato" });
});

router.post("/logout", (req, res) => {
  res.status(501).json({ message: "Endpoint logout non ancora implementato" });
});

router.get("/me", (req, res) => {
  res.status(501).json({ message: "Endpoint me non ancora implementato" });
});

export default router;
