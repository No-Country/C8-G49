require('dotenv').config()
const express = require('express')
const initDB = require('./src/dbconnection/connection')
const app = express()
const port = process.env.PORT

app.listen(port,()=>{
console.log("la aplicación esta en linea")
})
initDB()