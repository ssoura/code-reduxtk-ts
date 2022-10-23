import express, { application, Application, Request, Response } from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import "dotenv/config";

import gameRoute from "./routes/game.route";

const app: Application = express();
//middlewares
app.use(express.json());
app.use(cors());

app.use("/api/game", gameRoute);
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "hello world" });
});

export { app };
