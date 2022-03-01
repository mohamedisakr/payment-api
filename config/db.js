const {
  MONGODB_USERNAME = 'admin',
  MONGODB_PASSWORD = 'secret',
  MONGODB_HOST = 'localhost',
  MONGODB_PORT = 27017,
  MONGODB_DATABASE = 'auth',
} = process.env

const MONGODB_URI = 'mongodb://localhost:27017/auth'
const MONGODB_OPTIONS = {}
module.exports = {MONGODB_URI, MONGODB_OPTIONS}
