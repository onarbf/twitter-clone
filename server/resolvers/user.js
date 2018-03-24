import bcrypt from 'bcrypt';

export default {
  Query: {
    getholaMundo: ()=>'hola mundo',
    getUser: (parent,args,{models}, info) => models.User.findOne({username : args.username}),
    gUsers: (parent, args, {models}, info)=> models.User.find(),
  },
  Mutation:{
    addUser: async (parent, args, {models})=> {
      try {
        const hashPassword = await bcrypt.hash(args.password, 10);
        const user = await models.User.create({...args, password: hashPassword})

        console.log( hashPassword);
        console.log('user', user);
        console.log('userID', user._id);
        return user && user._id;
      } catch (e) {
        return false;
      }
    }
  }
}
