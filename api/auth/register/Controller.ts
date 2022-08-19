import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { UserInput } from "../../../database/models/User";

import { RegisterUseCase } from "./useCase";

let registerUseCase!: RegisterUseCase;

export class RegisterController {

  constructor(_registerUseCase: RegisterUseCase) {
    registerUseCase = _registerUseCase
  }

  public async execute(req: Request, res: Response): Promise<Response> {
    console.log(req);
    

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let data: UserInput = {
      name: req.body.body,
      email: req.body.email,
      password: req.body.passwrod,
      role: 1,
      status: 1,
    }

    let user = await  registerUseCase.execute(data)

    return res.status(201).json({
      user,
    }) 
  }
}