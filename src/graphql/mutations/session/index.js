const signUp = require('./signUp')
const signUpByInvitation = require('./signUpByInvitation')
const signIn = require('./signIn')
const signOut = require('./signOut')
const requestReset = require('./requestReset')
const resetPassword = require('./resetPassword')
const verifyEmail = require('./verifyEmail')
const inviteUser = require('./inviteUser')
const inviteToCompany = require('./inviteToCompany')

module.exports = {
  Mutation: {
    signUp,
    signUpByInvitation,
    signIn,
    signOut,
    requestReset,
    resetPassword,
    verifyEmail,
    inviteUser,
    inviteToCompany,
  },
}
