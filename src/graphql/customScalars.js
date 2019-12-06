const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')

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
  scalar LowercaseString
`

const resolvers = {
  LowercaseString,
}

module.exports = {
  typeDefs,
  resolvers,
}
