// INDEX:
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import info from "../src/db/info-api.json"

const app = express();

const PORT = process.env.BASE_PORT!;


app.get("/api", (req, res) => {
    res.json(info);
  });


app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
