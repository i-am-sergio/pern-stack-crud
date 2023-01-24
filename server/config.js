const { config } = require("dotenv")

config();

module.exports = {
  db: {
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "administrador",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
  }
}
