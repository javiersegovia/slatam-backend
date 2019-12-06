const { forwardTo } = require('prisma-binding')

module.exports = {
  Query: {
    company: forwardTo('db'),
    companies: forwardTo('db'),
  },
}
