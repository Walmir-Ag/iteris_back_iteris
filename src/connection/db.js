const Sequelize = require("sequelize");

if(process.env.EVIROMENT === "production"){
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD,
    {
        dialect: "mysql",
        host:process.env.DATABASE_HOST,
        port:process.env.DATABASE_PORT
    }
)
module.exports = sequelize
}else {
    const sequelize = new Sequelize(
    process.env.DATABASE_NAME_TESTE,
    process.env.DATABASE_USERNAME_TESTE,
    process.env.DATABASE_PASSWORD_TESTE,
    {
        dialect: "mysql",
        host:process.env.DATABASE_HOST_TESTE,
        host:process.env.DATABASE_HOST_TESTE,
    }
)
modules.exports =sequelize
}