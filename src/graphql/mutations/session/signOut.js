module.exports = (parent, args, ctx) => {
  ctx.res.clearCookie('sltmSessionToken')
  return { message: 'Goodbye' }
}
