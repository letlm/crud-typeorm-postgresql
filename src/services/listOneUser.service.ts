import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const listOneUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const userOne = users.find((user) => user.id === id);

  if (!userOne) {
    throw new AppError("User not found", 404);
  }

  return userOne;
};

export default listOneUserService;
