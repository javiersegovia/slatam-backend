const { promisify } = require('util')
const { randomBytes } = require('crypto')
const { sgMail, makeANiceEmail } = require('../../../mailer')

module.exports = async (parent, args, ctx) => {
  const { email } = args
  const user = await ctx.prisma.user({ email })
  if (!user) throw new Error(`No such user found for email ${email}`)

  const randomBytesPromise = promisify(randomBytes)
  const resetToken = (await randomBytesPromise(20)).toString('hex')
  const resetTokenExpiry = Date.now() + 3600000 // 1 hour

  await ctx.prisma.updateUser({
    where: { email },
    data: { resetToken, resetTokenExpiry },
  })

  await sgMail.send({
    to: user.email,
    from: 'javiersegoviaa29@gmail.com',
    subject: 'Your password reset token',
    html: makeANiceEmail(`You asked to reset your password. Click the link: 
    \n\n
    <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click me</a>`),
  })

  return { message: 'Thanks' }
}
