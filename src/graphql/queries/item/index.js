const { forwardTo } = require('prisma-binding')

module.exports = {
  Query: {
    item: forwardTo('db'),
    items: forwardTo('db'),
  },
}
