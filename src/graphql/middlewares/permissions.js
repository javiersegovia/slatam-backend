const { rule, shield, and } = require('graphql-shield')

const isAuthenticated = rule()(async (parent, args, ctx) => {
  const { userId } = ctx.req
  if (!userId) return new Error('You must be logged in to do that.')
  return !!userId
})

const isAdmin = rule()(async (parent, args, ctx) => {
  const { user } = ctx.req
  const admin = user.email.includes('@slatam.com')
  if (!admin) return new Error('You are not an admin!')
  return admin
})

const doNotHaveCompany = rule()(async (parent, args, ctx) => {
  const { userId } = ctx.req
  const company = await ctx.db.exists.Company({
    members_some: { id: userId },
  })
  if (company) return new Error('You are a member of a company already.')
  return !company
})

const isCompanyMember = rule()(async (parent, args, ctx) => {
  const { company } = ctx.req
  if (!company)
    return new Error('You must be a member of the company to do that.')
  return !!company
})

const isCompanyOwner = rule()(async (parent, args, ctx) => {
  const { user, company } = ctx.req
  const ownsCompany = await ctx.db.exists.Company({
    id: company.id,
    owner: {
      id: user.id,
    },
  })
  if (!ownsCompany) return new Error('You are not the company owner.')
  return !!ownsCompany
})

module.exports = shield({
  Query: {
    companies: isAuthenticated,
    users: and(isAuthenticated, isAdmin),
  },
  Mutation: {
    createCompany: and(isAuthenticated, doNotHaveCompany),
    createItem: and(isAuthenticated, isCompanyMember),
  },
})
