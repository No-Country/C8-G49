import { Sequelize } from "sequelize"


const db = new Sequelize("matcher", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    port: 3307
})

export default db