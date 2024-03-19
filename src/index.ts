import express from "express";
import info from "../src/db/info-api.json"

const app = express();

const PORT = process.env.PORT || 1947;


app.get("/api", (req, res) => {
    res.json(info);
  });


app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
