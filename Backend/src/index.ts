import express from 'express'
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/test', (_req, res) => {

    console.log("hello")
    res.send("Hi there!")
})

app.listen(PORT, () => {
    console.log(`Server running: port ${PORT}`)
})