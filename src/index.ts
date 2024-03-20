// INDEX:
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import info from "../src/db/info-api.json";
import usersRouter from "./routes/usersRouter";

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

const PORT = process.env.BASE_PORT!;

app.get("/api", (req, res) => {
  res.json(info);
});

app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
