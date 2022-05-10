import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {

      const userAdmin = this.turnUserAdminUseCase.execute(request.body)
      
      return response.status(200).json(userAdmin);
    } catch (error) {
      return response.status(404).json({ error: "User not found"});
    }
  }
}

export { TurnUserAdminController };
