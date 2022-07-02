import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";
import usersRoutes from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);

app.use(handleAppErrorMiddleware);

export default app;
