require('dotenv').config()
const httpStatus = require("./http_status")
const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET;
const DATABASE_URL = process.env.DATABASE_URL;
const ROLE_ADMIN = 'admin'; // admin : full roles in admin website
const ROLE_CUSTOMER = 'customer';
const ROLE_SALE = 'sale'
const TOXIC_WORDS = ['toxic',"bad"]

module.exports = {
    PORT,
    JWT_SECRET,
    httpStatus,
    ROLE_ADMIN,
    ROLE_CUSTOMER,
    ROLE_SALE,
    DATABASE_URL,
    TOXIC_WORDS
}