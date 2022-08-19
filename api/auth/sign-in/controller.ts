import { Request, Response } from "express"

export class SignInController {
  public async execute(req: Request, res: Response) {
    return res.status(200).json({
      message: "Teste"
    })
  }
}
