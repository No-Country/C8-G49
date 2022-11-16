import { Request, Response } from 'express'
import User, { UserInterface } from '../models/User'
import jwt from 'jsonwebtoken'
const { jwtSecret } = require('../config/config')


function generateToken(user: UserInterface) { // recibe un user basado en la UserInterface y retorna el jwt con su metodo sign que genera el token.
    return jwt.sign({ id: user.id, email: user.email }, jwtSecret)
}

export const register = async (req: Request, res: Response) => {
    if (!req.body.email || req.body.password) { // si no me pasa los datos devuelve error
        return res.status(400).json({ msg: 'Please, send email and password' })
    }
    const user = await User.findOne({ email: req.body.email }) // busco en la db si hay un email igual
    if (user) {
        return res.status(400).json({ msg: 'User already exist' })
    }
    const newUser = new User(req.body) // sino, creo un nuevo usuario y lo guardo.
    await newUser.save();

    return res.status(201).json(newUser);

}

export const loggin = async (req: Request, res: Response) => {

    if (!req.body.email || req.body.password) { // si no me pasa los datos devuelve error
        return res.status(400).json({ msg: 'Please, send email and password' })
    }
    const user = await User.findOne({ email: req.body.email }) // busco en la db si hay un email igual
    if (!user) {
        return res.status(400).json({ msg: 'User does not exist' })
    }
    const validate = await user.comparePassword(req.body.password)
    if (validate) {
        return res.status(400).json({ token: generateToken(user) });
    }
    return res.status(400).json({ msg: 'Email or password are incorrect' })
}


