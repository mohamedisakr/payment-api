const {Router} = require('express')
const {loginSchema, validate} = require('../validation')
const {User} = require('../models')
const {login, logout} = require('../auth')
const {guest, auth, catchAsync} = require('../middleware')
const {Unauthorized} = require('../errors')
const router = Router()

router.post(
  '/login',
  guest,
  catchAsync(async (req, res) => {
    await validate(loginSchema, req.body)
    const {email, password} = req.body

    const user = await User.findOne({email}).exec()
    const isMatch = await user.matchPassword(password)

    if (!user || !isMatch) {
      throw new Unauthorized('Invalid credentials')
    }

    login(req, user.id)

    return res.status(200).json({message: 'logged in'})
  }),
)

router.post(
  '/logout',
  auth,
  catchAsync(async (req, res) => {
    await logout(req, res)
    return res.json({message: 'logged out'})
  }),
)

module.exports = {router}
