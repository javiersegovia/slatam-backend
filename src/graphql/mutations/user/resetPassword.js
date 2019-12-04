const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = async (parent, args, ctx) => {
  const { password, confirmPassword, resetToken } = args

  if (password !== confirmPassword)
    throw new Error("The passwords don't match.")

  const [user] = await ctx.prisma.users({
    where: {
      resetToken,
      resetTokenExpiry_gte: Date.now() - 3600000,
    },
  })
  if (!user) throw new Error('This token is either invalid or expired.')

  const newPassword = await bcrypt.hash(password, 10)

  const updatedUser = await ctx.prisma.updateUser({
    where: { email: user.email },
    data: {
      password: newPassword,
      resetToken: null,
      resetTokenExpiry: null,
    },
  })

  const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET)

  ctx.res.cookie('sltmSessionToken', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  })

  return updatedUser
}
