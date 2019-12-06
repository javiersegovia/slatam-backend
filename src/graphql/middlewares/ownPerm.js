function isAuthenticated(resolve, obj, args, ctx, info) {
  const { userId } = ctx.req
  if (!userId) throw new Error('Se requiere autenticación')
  // const Authorization = ctx.request.get('Authorization')
  // if (Authorization) {
  //   const token = Authorization.replace('Bearer ', '')
  //   const session = jwt.verify(token, APP_SECRET)
  //   return resolve(obj, args, { ...ctx, session }, info)
  // }
}

function isAdmin(resolve, obj, args, ctx, info) {
  const { user } = ctx.req
  const admin = user.email.includes('@slatam.com')

  if (!admin) throw new Error('No eres admin')
}

module.exports = {
  Query: {
    companies: isAuthenticated && isAdmin,
    users: isAuthenticated,
  },
  Mutation: {
    createCompany: isAuthenticated,
  },
}
