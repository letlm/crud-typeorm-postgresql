import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await deleteUserService(id);

    return res.status(200).json({ message: "User deleted with sucess!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default deleteUserController;
