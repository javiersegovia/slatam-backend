const { Prisma } = require('prisma-binding')

const db = new Prisma({
  typeDefs: 'src/graphql/schema/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_MANAGEMENT_API_SECRET,
  debug: false,
})

module.exports = db
