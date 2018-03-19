export default `
  type User{
    username: String!
    password: String
  }
  type Query{
    getholaMundo: String!,
    gUsers : [User]!
  }
  type Mutation{
    addUser(username: String!, password: String!): User!
  }
`;
