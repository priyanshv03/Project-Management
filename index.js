import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const port = process.env.PORT || 3000;

const app = express();

app.listen(port, (req, res) => {
  console.log(`server is listening at ${port}`);
});
