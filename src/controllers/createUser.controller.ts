import { Request, Response } from "express";
import createUserService from "../services/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;

    const newUser = await createUserService({ name, email, password, age });
    console.log(newUser);
    const { id, created_at, updated_at } = newUser;
    return res
      .status(201)
      .send({ id, name, email, age, created_at, updated_at });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default createUserController;
