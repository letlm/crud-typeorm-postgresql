// import { AppDataSource } from "../data-source";
// import { User } from "../entities/user.entity";

// const updateUserService = async (
//   id: string,
//   nameReceived: string,
//   emailReceived: string,
//   ageReceived: number
// ) => {
//   const userRepository = AppDataSource.getRepository(User);

//   const users = await userRepository.find();

//   const userIndex = users.findIndex((user) => user.id === id);

//   if (userIndex === -1) {
//     throw new Error("Usuário não encontrado");
//   }

//   const user = users[userIndex];

//   if (nameReceived) {
//     user.name = nameReceived;
//   }

//   if (emailReceived) {
//     user.email = emailReceived;
//   }

//   if (ageReceived) {
//     user.age = ageReceived;
//   }

//   user.updated_at = new Date()
// };

// export default updateUserService;
