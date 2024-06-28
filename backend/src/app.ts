import express from "express";
import dotenv from "dotenv";
import connectTOMOGODB from "./db/databases/mongo-connect.js";

const app = express();

dotenv.config({"path":".env"});

// connecting to mongo-db database.
connectTOMOGODB();

/**
 * using default middlewares.
 */
app.use(express.json());


/**
 * using custom routes
 */
import routes from "./routes/index.js";
app.use("/api/v1",routes);



export default app;

