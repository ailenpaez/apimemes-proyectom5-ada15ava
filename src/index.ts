// INDEX:
import express from "express";
import cors from "cors";
import info from "../src/database/info-api.json";
import usersRouter from "./routes/usersRouter";
import memesRouter from "./routes/memesRouter";
import morgan from "morgan"
import dotenv from "dotenv";
dotenv.config();
import os from "node:os";

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"))

const PORT = process.env.BASE_PORT!;

app.get("/api", (req, res) => {
  res.json(info);
});

app.use("/api/users", usersRouter);
app.use("/api/memes", memesRouter);

app.get("/api/ping", (req, res) => {
  const networkInterfaces = os.networkInterfaces();
  const firstInterface = Object.values(networkInterfaces)[0];
  const ip = firstInterface?.find(
    (details) => details.family === "IPv4"
  )?.address;

  res.status(200).json([
    "PING->🏓",
    {
      SERVER: os.hostname(),
      IP: ip || "IP_NOT_FOUND🚫",
      STATUS: "200-OK✔️",
      PORT: `${PORT}`,
      VERSION: "1.0.0",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
