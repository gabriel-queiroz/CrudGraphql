const User = require('./Models/User');

module.exports = {
  Query: {
    users: () => {
      return User.find();
    },
    user: (proxy, { id }) => {
      console.log(id);
      return User.findById(id);
    }
  },
  Mutation: {
    createUser: (proxy, user) => {
      console.log(user);
      return User.create(user);
    },
    deleteUser: (proxy, { id }) => {
      return User.findByIdAndRemove(id);
    },
    updateUser: (proxy, { id, ...user }) => {
      return User.findByIdAndUpdate(id, {
        ...user
      });
    }
  }
};
