const { makeExecutableSchema } = require('apollo-server-express')
const { applyMiddleware } = require('graphql-middleware')
const merge = require('lodash/merge')
const { importSchema } = require('graphql-import')
const middlewares = require('./middlewares')

// CUSTOM SCALAR TYPES
const customScalars = require('./customScalars')

// QUERIES
const userQueries = require('./queries/user')
const itemQueries = require('./queries/item')
const companyQueries = require('./queries/company')

// MUTATIONS
const userMutations = require('./mutations/user')
const itemMutations = require('./mutations/item')
const companyMutations = require('./mutations/company')

// SUBCRIPTIONS
// ...

const resolvers = merge(
  {},
  customScalars.resolvers,
  // queries
  userQueries,
  itemQueries,
  companyQueries,
  // mutations
  userMutations,
  itemMutations,
  companyMutations
)

const schemaDefs = importSchema('./src/graphql/schema/index.graphql')

const schema = makeExecutableSchema({
  typeDefs: [customScalars.typeDefs, schemaDefs],
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const schemaWithMiddleWares = applyMiddleware(schema, ...middlewares)

module.exports = schemaWithMiddleWares
