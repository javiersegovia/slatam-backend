module.exports = async (parent, args, ctx) => {
  const updates = { ...args }
  delete updates.id
  return ctx.prisma.updateItem({
    data: updates,
    where: {
      id: args.id,
    },
  })
}
