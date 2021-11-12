import express from 'express';
import { getUserBalances } from "./controllers/usersController.mjs";

const app = express();
const port = 3000;

app.get("/user/:id", getUserBalances);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
