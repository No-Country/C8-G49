require("dotenv").config();
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRouter from './routes/auth.routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'));
app.use(cors());

app.set('port', process.env.PORT || 3000)

app.get('/', (_req, res) => {
    console.log("hello")
    res.send(`API is at http://localhost:${app.get('port')} 😎`)
});

app.use(authRouter)


export default app;
