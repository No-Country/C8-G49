import { Router } from 'express'
import { register, loggin } from '../controllers/user.controller'
const router = Router();


router.post('/register', register)
router.post('/loggin', loggin)

export default router