import { Router } from "express";

import { signInController } from './sign-in'

const authRouter = Router()

authRouter.post('/sign-in', signInController.execute)

export { authRouter }
