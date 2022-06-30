import { IUserRequest } from "../interfaces";
import { User } from "../entities/user.entity";
import AppDataSource from "../data-source";
import { hash } from "bcryptjs";

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
    throw new Error("User already exists");
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
