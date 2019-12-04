const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const { GraphQLDateTime } = require('graphql-iso-date')
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json')

const LowercaseString = new GraphQLScalarType({
  name: 'LowercaseString',
  description: 'Returns all strings in lower case',
  parseValue(value) {
    return value.toLowerCase()
  },
  serialize(value) {
    return value.toLowerCase()
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return ast.value.toLowerCase()
    }
    return null
  },
})

const typeDefs = /* GraphQL */ `
  scalar DateTime
  scalar JSON
  scalar JSONObject
  scalar LowercaseString
`

const resolvers = {
  DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  LowercaseString,
}

module.exports = {
  typeDefs,
  resolvers,
}
