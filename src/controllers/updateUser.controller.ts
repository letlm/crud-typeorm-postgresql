import { Request, Response } from "express";
import updateUserService from "../services/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { name, email, age } = req.body;

    const user = await updateUserService(id, name, email, age);

    return res.status(200).json({ message: "Updated user" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default updateUserController;
