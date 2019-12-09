require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = async (parent, args, ctx) => {
  const { inviteToken, email, password, confirmPassword, ...otherArgs } = args
  if (!inviteToken) throw new Error(`Token not found.`)

  const userFragment = `
  fragment UserInvitationWithUser on UserInvitation {
    id
    sentBy {
      id
    }
    sentTo
  }
  `
  const companyFragment = `
  fragment UserInvitationWithCompany on CompanyInvitation {
    id
    sentBy {
      id
    }
    sentTo
  }
  `

  const userInvitation = await ctx.prisma
    .userInvitation({
      inviteToken,
    })
    .$fragment(userFragment)
  const companyInvitation = await ctx.prisma
    .companyInvitation({
      inviteToken,
    })
    .$fragment(companyFragment)

  if (!userInvitation && !companyInvitation)
    throw new Error(`Your invitation token is invalid.`)

  if (password !== confirmPassword)
    throw new Error("The passwords don't match.")

  const newEmail = email.toLowerCase()
  const newPassword = await bcrypt.hash(args.password, 10)

  let newUser

  if (userInvitation) {
    newUser = await ctx.prisma.createUser({
      ...otherArgs,
      email: newEmail,
      password: newPassword,
      verifiedEmail: true,
      lastSeen: new Date().toISOString(),
      invitedBy: {
        connect: {
          id: userInvitation.sentBy.id,
        },
      },
    })
    await ctx.prisma.updateUserInvitation({
      where: { id: userInvitation.id },
      data: {
        inviteToken: null,
      },
    })
  } else {
    newUser = await ctx.prisma.createUser({
      ...otherArgs,
      email,
      password: newPassword,
      verifiedEmail: true,
      lastSeen: new Date().toISOString(),
      company: {
        connect: {
          id: companyInvitation.sentBy.id,
        },
      },
    })
    await ctx.prisma.updateCompanyInvitation({
      where: { id: companyInvitation.id },
      data: {
        inviteToken: null,
      },
    })
  }

  const token = jwt.sign({ userId: newUser.id }, process.env.APP_SECRET)
  ctx.res.cookie('sltmSessionToken', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  })

  return newUser
}
