import { Router } from 'express'
import { body } from 'express-validator';

import { UserRepository } from '../../database/repositories/UserRepository';

import { RegisterUseCase } from './register/useCase';

import { RegisterController } from './register/Controller'

let userRepository = new UserRepository()

let registerUseCase = new RegisterUseCase(userRepository)

let registerController = new RegisterController(registerUseCase)

const authRouter = Router()

authRouter.post('/register', registerController.execute,
)

export { authRouter }
