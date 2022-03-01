const catchAsync =
  (handler) =>
  (...args) => {
    handler(...args).catch(args[2])
  }

const serverError = (err, req, res, next) => {
  if (!err.status) {
    console.error(err.stack)
  }
  res
    .status(err.status || 500)
    .json({message: err.message || 'Internal server error.'})
}

const notFound = (req, res, next) => {
  res.status(404).json({message: 'Not found.'})
}

module.exports = {catchAsync, serverError, notFound}
