import { Router } from "express";
import { getAllGames, createGame } from "../controllers/game.controller";

const router: Router = Router();

router.get("/", getAllGames);
router.post("/", createGame);
export default router;
