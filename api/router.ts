import { Router } from "express";
import { authRouter } from './auth/router'

import Home from './home'

const router = Router()

router.use('/auth', authRouter)

router.get('/', Home)

export { router }