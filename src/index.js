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

app.use((req, res, next) => {
  const { sltmSessionToken } = req.cookies

  if (sltmSessionToken) {
    const { userId } = jwt.verify(sltmSessionToken, process.env.APP_SECRET)
    req.userId = userId
  }
  next()
})

app.use(async (req, res, next) => {
  if (!req.userId) return next()

  const updatedUser = await prisma.updateUser({
    where: {
      id: req.userId,
    },
    data: {
      lastSeen: new Date().toISOString(),
    },
  })

  const company = await prisma.user({ id: req.userId }).company()

  req.user = updatedUser
  req.company = company
  next()
})

server.applyMiddleware({
  app,
  cors: false,
})

app.listen({ port: process.env.PORT }, () =>
  console.log( // eslint-disable-line
    `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
  )
)
