require('dotenv').config()

//Database Configuration
const dbHost = process.env.DB_HOST
const dbUsername=process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbPort = process.env.DB_PORT

// App Config
const appPort = process.env.APP_PORT
console.log(appPort)
module.export = {
    dbHost, dbUsername, dbPassword, dbName, dbPort, appPort
}