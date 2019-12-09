const joinByInvitation = require('./joinByInvitation')
const createCompany = require('./createCompany')
// const deleteItem = require('./deleteItem')
// const updateItem = require('./updateItem')

module.exports = {
  Mutation: {
    joinByInvitation,
    createCompany,
    // deleteItem,
    // updateItem,
  },
}
