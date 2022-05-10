import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {

      const user = this.showUserProfileUseCase.execute(request.body);
      
      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({error: "User not found"});
    }
  }
}

export { ShowUserProfileController };
