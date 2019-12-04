const createRandomUser = require('./createRandomUser')
const deleteAllUsers = require('./deleteAllUsers')
const signUp = require('./signUp')
const signIn = require('./signIn')
const signOut = require('./signOut')
const requestReset = require('./requestReset')
const resetPassword = require('./resetPassword')

module.exports = {
  Mutation: {
    createRandomUser,
    deleteAllUsers,
    signUp,
    signIn,
    signOut,
    requestReset,
    resetPassword,
  },
}
