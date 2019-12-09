const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = async (parent, args, ctx) => {
  const { email, password } = args

  const fragment = `
    fragment UserSignIn on User {
      id
      password
    }
  `
  const user = await ctx.prisma.user({ email }).$fragment(fragment)
  if (!user) throw new Error(`No such user found for email ${email}`)

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error(`Invalid password.`)

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  ctx.res.cookie('sltmSessionToken', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  })

  return user
}
