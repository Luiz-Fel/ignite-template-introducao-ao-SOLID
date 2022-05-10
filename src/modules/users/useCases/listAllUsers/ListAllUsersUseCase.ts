import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);
    const isAdmin = userExists.admin

    if (userExists && isAdmin) {
      return this.usersRepository.list()
    } else {
      throw new Error("User is not admin or dont exists")
    }
  }
}

export { ListAllUsersUseCase };
