import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const userAdmin = this.turnUserAdminUseCase.execute(request.body)

    return response.status(200).json(userAdmin);
  }
}

export { TurnUserAdminController };
