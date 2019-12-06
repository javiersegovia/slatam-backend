require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = async (parent, args, ctx) => {
  const email = args.email.toLowerCase()
  const password = await bcrypt.hash(args.password, 10)

  const fragment = `
    fragment UserEmail on User {
      email
    }
  `

  const userExists = await ctx.prisma.user({ email }).$fragment(fragment)
  if (userExists) throw new Error(`Email not available.`)

  const user = await ctx.prisma.createUser({
    ...args,
    email,
    password,
    lastSeen: new Date().toISOString(),
  })

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  ctx.res.cookie('sltmSessionToken', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  })

  return user
}
