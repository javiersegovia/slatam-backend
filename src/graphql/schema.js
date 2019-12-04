const { makeExecutableSchema } = require('apollo-server-express')
const { merge } = require('lodash')

// CUSTOM SCALAR TYPES
const custom = require('./types/custom')

// TYPE DEFS
const General = require('./types/General')
const User = require('./types/User')

// QUERIES
const userQueries = require('./queries/user')

// MUTATIONS
const userMutations = require('./mutations/user')

// SUBCRIPTIONS
// ...

const Root = /* GraphQL */ `
  type Query {
    dummy: String
  }
  type Mutation {
    dummy: String
  }
  type Subscription {
    dummy: String
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`

const resolvers = merge(
  {},
  custom.resolvers,
  // queries
  userQueries,
  // mutations
  userMutations
)

const schema = makeExecutableSchema({
  typeDefs: [Root, custom.typeDefs, General, User],
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

module.exports = schema
