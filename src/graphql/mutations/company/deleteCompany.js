module.exports = async (parent, args, ctx) => {
  const where = { id: args.id }
  const item = await ctx.prisma.item({ where })

  if (!ctx.req.userId) throw new Error('You must be logged in to do that.')

  // const ownsItem = item.owner.id === ctx.req.userId
  // const hasPermissions = ctx.req.user.permissions.some((permission) =>
  //   ['ADMIN', 'ITEMDELETE'].includes(permission)
  // )
  // if (!ownsItem && !hasPermissions) throw new Error('You are not allowed!')

  const deleteItem = await ctx.prisma.deleteItem({ where })
  return deleteItem
}
