import express from "express";
import dotenv from "dotenv";
import connectTOMOGODB from "./db/databases/mongo-connect.js";
import cache from "node-cache";
import { errorMiddleWare } from "./middlewares/error.middleware.js";
import morgan from "morgan";

const app = express();

/**
 * Initialising node-cache in memory caching.
 */
export const myCache = new cache();

dotenv.config({"path":".env"});

// connecting to mongo-db database.
connectTOMOGODB();

/**
 * using default middlewares.
 */
app.use(express.json());
app.use(morgan("dev"));

/**
 * using custom routes
 */
import routes from "./routes/index.js";
app.use("/api/v1",routes);


app.use(errorMiddleWare);


export default app;

