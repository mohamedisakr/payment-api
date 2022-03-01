const {Router} = require('express')
const {catchAsync, auth} = require('../middleware')
const {User} = require('../models')
const router = Router()

router.get(
  '/home',
  auth,
  catchAsync(async (req, res) => {
    const user = await User.findById(req.session.userId)
      .select('-password -__v')
      .exec()
    return res.status(200).json(user)
  }),
)

module.exports = {router}
