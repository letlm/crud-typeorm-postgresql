import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new Error("User not found");
  }

  await userRepository.save(user);
};

export default deleteUserService;
