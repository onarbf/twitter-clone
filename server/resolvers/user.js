export default {
  Query: {
    getholaMundo: ()=>'hola mundo',
    gUsers: (parent, args, {models}, info)=> models.User.find(),
  },
  Mutation:{
    addUser: (parent, args, {models})=>models.User.create(args)
  }
};
