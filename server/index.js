import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js"; // we must write filename with extension for backend
import defaultData from "./default.js";
import Router from "./routes/route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", Router)

const PORT = 5000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// db connection
Connection(USERNAME, PASSWORD);

// server running port
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});



defaultData();