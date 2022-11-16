const controller = {}
const connection = require('../dbconnection/connection')

controller.index = async (req,res) =>{
    try{
const title="CONNECTION ESTABLECIDA"
await connection()
console.log("connection establecida correctamente.")
res.render('index', {title})
    }catch(err){
        console.error(err)
    }
}

module.exports= controller