"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggin = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { jwtSecret } = require('../config/config');
function generateToken(user) {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, jwtSecret);
}
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || req.body.password) { // si no me pasa los datos devuelve error
        return res.status(400).json({ msg: 'Please, send email and password' });
    }
    const user = yield User_1.default.findOne({ email: req.body.email }); // busco en la db si hay un email igual
    if (user) {
        return res.status(400).json({ msg: 'User already exist' });
    }
    const newUser = new User_1.default(req.body); // sino, creo un nuevo usuario y lo guardo.
    yield newUser.save();
    return res.status(201).json(newUser);
});
exports.register = register;
const loggin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || req.body.password) { // si no me pasa los datos devuelve error
        return res.status(400).json({ msg: 'Please, send email and password' });
    }
    const user = yield User_1.default.findOne({ email: req.body.email }); // busco en la db si hay un email igual
    if (!user) {
        return res.status(400).json({ msg: 'User does not exist' });
    }
    const validate = yield user.comparePassword(req.body.password);
    if (validate) {
        return res.status(400).json({ token: generateToken(user) });
    }
    return res.status(400).json({ msg: 'Email or password are incorrect' });
});
exports.loggin = loggin;
