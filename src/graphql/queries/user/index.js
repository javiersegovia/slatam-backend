const { forwardTo } = require('prisma-binding')

module.exports = {
  Query: {
    users: forwardTo('db'),
  },
}
