const {Router} = require('express')
const {registerSchema, validate} = require('../validation')
const {User} = require('../models')
const {login} = require('../auth')
const {guest, catchAsync} = require('../middleware')
const {BadRequest} = require('../errors')
const router = Router()

router.post(
  '/register',
  guest,
  catchAsync(async (req, res) => {
    await validate(registerSchema, req.body) //.validateAsync(req.body, {abortEarly: false})

    const {email, name, password} = req.body

    const found = await User.exists({email})
    if (found) {
      throw new BadRequest('Invalid Email')
    }

    const user = await User.create({email, name, password})
    login(req, user.id)
    return res.json({message: 'ok'})
  }),
)

module.exports = {router}
