// INDEX:
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import info from "../src/database/info-api.json";
import usersRouter from "./routes/usersRouter";
import memesRouter from "./routes/memesRouter";

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

const PORT = process.env.BASE_PORT!;

app.get("/api", (req, res) => {
  res.json(info);
});

app.use("/api/users", usersRouter);
app.use("/api/memes", memesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});