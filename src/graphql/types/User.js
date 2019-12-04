const User = /* GraphQL */ `
  extend type Query {
    getAllUsers: [User]!
  }

  extend type Mutation {
    createRandomUser: User!
    deleteAllUsers: SuccessMessage
    signUp(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): User!
    signIn(email: String!, password: String!): User!
    signOut: SuccessMessage
    requestReset(email: String!): SuccessMessage
    resetPassword(
      resetToken: String!
      password: String!
      confirmPassword: String!
    ): User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }
`

module.exports = User
