const createRandomUser = require('./createRandomUser')
const deleteUser = require('./deleteUser')

module.exports = {
  Mutation: {
    createRandomUser,
    deleteUser,
  },
}
