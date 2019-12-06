const createItem = require('./createItem')
const deleteItem = require('./deleteItem')
const updateItem = require('./updateItem')

module.exports = {
  Mutation: {
    createItem,
    deleteItem,
    updateItem,
  },
}
