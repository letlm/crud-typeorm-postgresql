import { Request, Response } from "express";
import listOneUserService from "../services/listOneUser.service";

const listOneUserController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const user = await listOneUserService(id);

  return res.status(200).send(user);
};

export default listOneUserController;
