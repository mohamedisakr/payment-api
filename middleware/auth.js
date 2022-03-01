const {isLoggedIn, logout} = require('../auth')
const {SESSION_ABSOLUTE_TIMEOUT} = require('../config')
const {BadRequest, Unauthorized} = require('../errors')

const guest = (req, res, next) => {
  if (isLoggedIn(req)) {
    return next(new BadRequest('Your are already logged in'))
  }
  next()
}

const auth = (req, res, next) => {
  if (!isLoggedIn(req)) {
    return next(new Unauthorized('Your must be logged in'))
  }
  next()
}

const active = async (req, res, next) => {
  if (isLoggedIn(req)) {
    const now = Date.now()
    const {createdAt} = req.session

    if (now > createdAt + SESSION_ABSOLUTE_TIMEOUT) {
      await logout(req, res)
    }
    return next(new Unauthorized('Session expired'))
  }
  next()
}

module.exports = {guest, auth, active}
