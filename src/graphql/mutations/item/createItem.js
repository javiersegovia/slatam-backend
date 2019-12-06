module.exports = async (parent, args, ctx) => {
  const { company } = ctx.req
  const item = await ctx.prisma.createItem({
    owner: {
      connect: {
        id: company.id,
      },
    },
    ...args,
  })
  return item
}
