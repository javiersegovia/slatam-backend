module.exports = async (parent, args, ctx) => {
  const { userId } = ctx.req
  if (!userId) throw new Error('You must be logged in to do that.')

  const userHasCompany = await ctx.prisma.user({ id: userId }).company()

  if (userHasCompany) throw new Error('You already have a company.')

  const company = await ctx.prisma.createCompany({
    ...args,
    owner: {
      connect: {
        id: userId,
      },
    },
    members: {
      connect: [
        {
          id: userId,
        },
      ],
    },
    companyRole: {
      set: args.companyRole,
    },
  })
  return company
}
