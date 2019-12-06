module.exports = async (parent, args, ctx) => {
  if (!ctx.req.userId) throw new Error('You must be logged in to do that.')

  const item = await ctx.prisma.createItem({
    owner: {
      connect: {
        id: ctx.req.userId,
      },
    },
    ...args,
  })
  return item
}
