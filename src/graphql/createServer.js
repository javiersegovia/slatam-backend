const { ApolloServer } = require('apollo-server-express')
const schema = require('./schema')
const { prisma } = require('../../generated/prisma-client')

function createServer() {
  return new ApolloServer({
    schema,
    context: (req) => ({ ...req, prisma }),
  })
}

module.exports = createServer
