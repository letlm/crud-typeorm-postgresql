import { Request, Response } from "express";
import updateUserService from "../services/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const { name, email, age } = req.body;

  const user = await updateUserService(id, name, email, age);

  return res.status(200).json({ message: "Updated user" });
};

export default updateUserController;
