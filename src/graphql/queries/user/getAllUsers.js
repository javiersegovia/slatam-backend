module.exports = async (parent, args, ctx, info) => {
  return ctx.prisma.users()
}
