const mongoose = require('mongoose')
const express = require('express')
const session = require('express-session')
const connectRedis = require('connect-redis')
const Redis = require('ioredis')
const {
  REDIS_OPTIONS,
  APP_PORT,
  MONGODB_URI,
  MONGODB_OPTIONS,
} = require('./config')

const createApp = require('./app')

;(async () => {
  await mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
  const RedisStore = connectRedis(session)
  const client = new Redis(REDIS_OPTIONS)
  const store = new RedisStore({client})
  const app = createApp(store)
  app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`))
})()
