import "reflect-metadata";
import express from "express";
import usersRoutes from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);

// app.listen(3000, () => {
//   console.log("Servidor executando");
// });

export default app;