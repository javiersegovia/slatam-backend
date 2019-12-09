const jwt = require('jsonwebtoken')

module.exports = async (parent, args, ctx) => {
  const { verifyEmailToken, email } = args
  if (!verifyEmailToken) throw new Error(`Token not found.`)
  if (!email) throw new Error(`Email not found.`)

  const user = await ctx.prisma.user({ email })
  if (!user) throw new Error(`User not found.`)

  if (user.verifiedEmail) throw new Error(`You already verified your email.`)

  if (user.verifyEmailToken !== verifyEmailToken)
    throw new Error(`Your token is invalid.`)

  const updatedUser = await ctx.prisma.updateUser({
    where: { id: user.id },
    data: {
      verifyEmailToken: '',
      verifiedEmail: true,
    },
  })

  const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET)

  ctx.res.cookie('sltmSessionToken', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  })

  return updatedUser
}
