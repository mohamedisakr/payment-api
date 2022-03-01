const {hash, compare} = require('bcryptjs')
const {Schema, model} = require('mongoose')
const {BCRYPT_WORK_FACTOR} = require('../config')

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
  },
  {timestamps: true},
)

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password, BCRYPT_WORK_FACTOR)
  }
})

// implement async version
userSchema.methods.matchPassword = function (password) {
  return compare(password, this.password)
}

userSchema.set('toJSON', {
  transform: (doc, {__v, password, ...rest}, options) => rest,
})

const User = model('user', userSchema)
module.exports = User
