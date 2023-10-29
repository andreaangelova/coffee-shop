import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const coffeeProxy = require("./coffee/");

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use("/api/v1/coffee", coffeeProxy);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});