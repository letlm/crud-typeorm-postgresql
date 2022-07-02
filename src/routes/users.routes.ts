import Router from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listOneUserController from "../controllers/listOneUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get("", listUsersController);
usersRoutes.get("/:id", listOneUserController);
usersRoutes.patch("/:id", updateUserController);
usersRoutes.delete("/:id", deleteUserController);

export default usersRoutes;
