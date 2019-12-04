require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const createServer = require('./graphql/createServer')
const { prisma } = require('../generated/prisma-client')

const app = express()
const server = createServer()

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
}

app.use(cors(corsOptions))
app.use(cookieParser())

// decode the JWT so we can get the user ID on each request
app.use((req, res, next) => {
  const { sltmSessionToken } = req.cookies

  if (sltmSessionToken) {
    console.log('token readed')
    const { userId } = jwt.verify(sltmSessionToken, process.env.APP_SECRET)
    req.userId = userId
  } else {
    console.log('theres no cookie')
  }
  next()
})

// use express middleware to populate current user on each request

app.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next()

  const fragment = `
    fragment UserBasicInfo on User {
      id
      firstName
      lastName
      email
    }
  `

  const user = await prisma.user({ id: req.userId }).$fragment(fragment)

  if (user) console.log('user found')

  req.user = user

  next()
})

server.applyMiddleware({
  app,
  cors: false,
})

app.listen({ port: process.env.PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
  )
)
