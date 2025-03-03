import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnection from "./database/db";
import router from "./routes/router";


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

dbConnection({ username : username as string, password : password as string });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

