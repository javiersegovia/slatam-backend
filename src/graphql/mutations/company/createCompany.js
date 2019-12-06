module.exports = async (parent, args, ctx) => {
  const { userId } = ctx.req
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
