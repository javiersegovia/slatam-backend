require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uuid = require('uuid/v4')
const { sgMail, makeANiceEmail } = require('../../../mailer')

module.exports = async (parent, args, ctx) => {
  const { email, password, confirmPassword, ...otherArgs } = args

  if (password !== confirmPassword)
    throw new Error("The passwords don't match.")

  const newEmail = email.toLowerCase()
  const newPassword = await bcrypt.hash(args.password, 10)

  const userExists = await ctx.db.exists.User({ email })
  if (userExists) throw new Error(`Email not available.`)

  const verifyEmailToken = uuid()

  const user = await ctx.prisma.createUser({
    ...otherArgs,
    verifyEmailToken,
    email: newEmail,
    password: newPassword,
    lastSeen: new Date().toISOString(), // TODO: Delete this after deleting the token below
  })

  // TODO: Delete the following code to require SIGN IN
  // of only verified users

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
  ctx.res.cookie('sltmSessionToken', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  })

  await sgMail.send({
    to: user.email,
    from: process.env.SENDGRID_SUPPORT_EMAIL,
    subject: 'Welcome to Slatam!',
    html: makeANiceEmail(`Welcome to Slatam.com.\n\n 
    Please visit the link to verify your email:\n\n
    <a href="${process.env.FRONTEND_URL}/verify?verifyEmailToken=${verifyEmailToken}">Click me</a>`),
  })

  return user
}
