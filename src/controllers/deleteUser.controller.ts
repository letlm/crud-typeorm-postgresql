import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deleteUserService(id);

  return res.status(200).json({ message: "User deleted with sucess!" });
};

export default deleteUserController;
