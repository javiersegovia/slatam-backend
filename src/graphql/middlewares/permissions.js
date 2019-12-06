const { rule, shield, and, or, not } = require('graphql-shield')

const isAuthenticated = rule()(async (parent, args, ctx) => {
  const { userId } = ctx.req
  if (!userId) return new Error('Se requiere autenticación.')
  return !!userId
})

const isAdmin = rule()(async (parent, args, ctx) => {
  const { user } = ctx.req
  const admin = user.email.includes('@slatam.com')
  if (!admin) return new Error('No eres administrador!')
  return admin
})

module.exports = shield({
  Query: {
    companies: isAuthenticated,
    users: and(isAuthenticated, isAdmin),
  },
  Mutation: {
    createCompany: isAuthenticated,
  },
})
