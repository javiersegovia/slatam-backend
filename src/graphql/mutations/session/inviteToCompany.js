require('dotenv').config()
const uuid = require('uuid/v4')
const { sgMail, makeANiceEmail } = require('../../../mailer')

const successMessage = { message: 'The invitation has been sent.' }
module.exports = async (parent, args, ctx) => {
  const email = args.email.toLowerCase()
  const { user, company } = ctx.req
  const inviteToken = uuid()

  const fragment = `
  fragment UserWithCompany on User {
      email
      company {
        id
      }
    }
  `

  const invitedUser = await ctx.prisma.user({ email }).$fragment(fragment)

  const invitationSent = await ctx.prisma.companyInvitations({
    where: {
      sentTo: email,
      sentBy: {
        id: company.id,
      },
    },
  })

  if (invitationSent.length > 0) return successMessage

  if (invitedUser) {
    if (invitedUser.company && invitedUser.company.id)
      throw new Error(
        `That user is already associated with a company inside Slatam.`
      )

    await ctx.prisma.createCompanyInvitation({
      inviteToken,
      sentTo: invitedUser.email,
      sentBy: {
        connect: {
          id: company.id,
        },
      },
    })

    const emailContent = `You have been invited to join ${company.name}.\n
    This is an invitation sent by ${user.firstName} ${user.lastName}. \n\n
    If you are interested, please visit the following link:\n
    <a href="${process.env.FRONTEND_URL}/join?inviteToken=${inviteToken}">Click me</a>`

    await sgMail.send({
      to: invitedUser.email,
      from: process.env.SENDGRID_SUPPORT_EMAIL,
      subject: `Invitation to ${company.name}`,
      html: makeANiceEmail(emailContent),
    })
  } else {
    await ctx.prisma.createCompanyInvitation({
      inviteToken,
      sentTo: email,
      sentBy: {
        connect: {
          id: company.id,
        },
      },
    })

    const emailContent = `We have heard that you may be interested in joining ${company.name}.\n
    This is an invitation sent by ${user.firstName} ${user.lastName} from Slatam.com. \n\n
    If you are interested in joining our platform, please visit the following link:\n
    <a href="${process.env.FRONTEND_URL}/register?inviteToken=${inviteToken}">Click me</a>`

    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_SUPPORT_EMAIL,
      subject: 'Invitation to Slatam.com',
      html: makeANiceEmail(emailContent),
    })
  }

  return successMessage
}
