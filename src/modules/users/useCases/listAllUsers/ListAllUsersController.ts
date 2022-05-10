import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {

      const users = this.listAllUsersUseCase.execute(request.body);
      
      return response.status(200).json(users)
    } catch (error) {
      return response.status(400).json({error: "User is not admin"})
    }
  }
}

export { ListAllUsersController };
