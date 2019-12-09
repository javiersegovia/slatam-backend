require('dotenv').config()
const uuid = require('uuid/v4')
const { sgMail, makeANiceEmail } = require('../../../mailer')

module.exports = async (parent, args, ctx) => {
  const email = args.email.toLowerCase()
  const { user } = ctx.req
  const successMessage = { message: 'Thanks for inviting a new user!' }

  const accountExists = await ctx.db.exists.User({ email })
  const invitationSent = await ctx.prisma.userInvitations({
    where: {
      sentTo: email,
      sentBy: {
        id: user.id,
      },
    },
  })

  if (accountExists || invitationSent.length > 0) return successMessage

  const inviteToken = uuid()
  const newInvitation = await ctx.prisma.createUserInvitation({
    inviteToken,
    sentTo: email,
    sentBy: {
      connect: {
        id: user.id,
      },
    },
  })

  await sgMail.send({
    to: newInvitation.sentTo,
    from: process.env.SENDGRID_SUPPORT_EMAIL,
    subject: 'Invitation to Slatam.com',
    html: makeANiceEmail(`We have heard that you may be interested in joining our platform.\n
    This is an invitation sent by ${user.firstName} ${user.lastName} from Slatam.com. \n\n
    Please visit the following link to continue:\n
    <a href="${process.env.FRONTEND_URL}/register?inviteToken=${inviteToken}">Click me</a>`),
  })

  return successMessage
}
