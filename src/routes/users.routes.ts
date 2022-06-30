import Router from "express";
import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get("", listUsersController);

export default usersRoutes;
