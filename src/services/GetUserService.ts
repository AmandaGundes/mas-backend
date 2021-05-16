import { getRepository } from "typeorm";
import { User } from "../model/User";

interface UserData {
  id?: string
}

class GetUserService {
  public async execute({ id }: UserData): Promise<User | {}> {

    if (!id) {
      return {
        error: "Id not found in the parameter"
      }
    }

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ id });

    if (!user) {
      return {
        error: "User not found"
      }
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }
}

export { GetUserService };