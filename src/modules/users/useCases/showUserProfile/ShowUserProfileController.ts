import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const user = this.showUserProfileUseCase.execute(request.body);

    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
