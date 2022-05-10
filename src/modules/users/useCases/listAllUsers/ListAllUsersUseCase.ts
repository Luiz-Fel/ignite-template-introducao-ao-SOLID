import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isAdmin = this.usersRepository.findById(user_id).admin;
    
    if (isAdmin) {
      return this.usersRepository.list()
    } else {
      throw new Error("User is not admin")
    }
  }
}

export { ListAllUsersUseCase };
