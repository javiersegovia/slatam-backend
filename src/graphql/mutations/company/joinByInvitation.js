const jwt = require('jsonwebtoken')

module.exports = async (parent, args, ctx) => {
  const { inviteToken } = args
  if (!inviteToken) throw new Error(`Token not found.`)

  const userIdFragment = `
  fragment UserId on User {
    id
  }`

  const companyFragment = `
  fragment UserInvitationWithCompany on CompanyInvitation {
    id
    sentBy {
      id
    }
    sentTo
  }
  `

  const companyInvitation = await ctx.prisma
    .companyInvitation({
      inviteToken,
    })
    .$fragment(companyFragment)

  if (!companyInvitation) throw new Error(`Your invitation token is invalid.`)

  if (!ctx.req.user) {
    const currentUser = await ctx.prisma
      .user({
        email: companyInvitation.sentTo,
      })
      .$fragment(userIdFragment)

    const token = jwt.sign({ userId: currentUser.id }, process.env.APP_SECRET)

    ctx.res.cookie('sltmSessionToken', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    })
  }

  if (ctx.req.user.email !== companyInvitation.sentTo)
    throw new Error(`This invitation is not for you.`)

  const updatedUser = await ctx.prisma.updateUser({
    where: { email: companyInvitation.sentTo },
    data: {
      company: {
        connect: {
          id: companyInvitation.sentBy.id,
        },
      },
    },
  })

  await ctx.prisma.updateCompanyInvitation({
    where: { inviteToken },
    data: {
      inviteToken: null,
    },
  })

  return updatedUser
}
