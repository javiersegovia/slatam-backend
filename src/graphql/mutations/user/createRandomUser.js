const faker = require('faker')

module.exports = async (parent, args, ctx, info) => {
  return ctx.prisma.createUser({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  })
}
