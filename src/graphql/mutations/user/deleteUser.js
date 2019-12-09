module.exports = async (parent, args, ctx) => {
  const { email } = args

  await ctx.prisma.deleteManyCompanies({ owner: { email } })
  await ctx.prisma.deleteUser({ email })
  return { message: `User deleted succesfully.` }
}
