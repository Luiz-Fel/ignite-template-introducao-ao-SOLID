import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new Error("User already exists.")
    } else {
      const user = {
        email,
        name
      }
      return  this.usersRepository.create(user)
    }
  }
}

export { CreateUserUseCase };
