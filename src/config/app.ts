import express from "express";
// import setupRoutes from "./routes";
import setupExpress from "./express";
import errorHandler from "../middlewares/errorHandler";
import path from "path";

const app = express();
setupExpress(app);
// setupRoutes(app);
app.use(errorHandler);

export default app;
