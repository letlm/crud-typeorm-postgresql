import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import bcrypt from "bcryptjs";

const updateUserService = async (
  id: string,
  nameReceived: string,
  emailReceived: string,

  ageReceived: number
) => {
  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOneBy({ id: id });

  //   if (bcrypt.compareSync(passwordReceived, account!.password)) {
  //     throw new Error("Inform a different password.");
  //   }

  //   const newPassword = bcrypt.hashSync(passwordReceived, 10);

  const newName = nameReceived;

  const newEmail = emailReceived;

  const newAge = ageReceived;

  await userRepository.update(account!.id, {
    id: id,
    name: newName,
    email: newEmail,
    age: newAge,

    created_at: account!.created_at,
    updated_at: new Date(),
  });

  return true;
};

export default updateUserService;
