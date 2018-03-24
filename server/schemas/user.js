export default `
  type User{
    username: String!
    password: String!
    password2: String!
    fullname: String!
    email: String!
    thumbnail: String
  }
  type Query{
    getholaMundo: String!
    getUser(username:String!): User!
    gUsers : [User]!
  }
  type Mutation{
    addUser(username: String! email: String!, password: String!): Boolean!
  }
`;
