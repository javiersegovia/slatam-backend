const { ApolloServer } = require('apollo-server-express')
const schema = require('./schema')
const { prisma } = require('../../generated/prisma-client')
const db = require('./db')

function createServer() {
  return new ApolloServer({
    schema,
    context: (req) => ({ ...req, prisma, db }),
  })
}

module.exports = createServer
