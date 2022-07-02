import { IUserRequest } from "../interfaces";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { hash } from "bcryptjs";
import { AppError } from "../errors/AppError";

const createUserService = async ({
  name,
  email,
  password,
  age,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      email: email,
    },
  });

  if (findUser) {
    throw new AppError("User already exists", 400);
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    password: hashedPassword,
    age,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
