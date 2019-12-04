module.exports = async (parent, args, ctx) => {
  const usersDeleted = await ctx.prisma.deleteManyUsers({
    email_not_contains: '@slatam.com',
  })
  return { message: `You deleted ${usersDeleted.count} users` }
}
