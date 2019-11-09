const User = require('./Models/User');

const NEW_USER = 'NEW_USER';

module.exports = {
  Query: {
    users: () => {
      return User.find();
    },
    user: (proxy, { id }) => {
      return User.findById(id);
    }
  },
  Mutation: {
    createUser: async (proxy, user, { pubsub }) => {
      const newUser = await User.create(user);
      const users = await User.find();
      pubsub.publish(NEW_USER, { newUser: users });
      return newUser;
    },
    deleteUser: (proxy, { id }) => {
      return User.findByIdAndRemove(id);
    },
    updateUser: (proxy, { id, ...user }) => {
      return User.findByIdAndUpdate(id, {
        ...user
      });
    }
  },
  Subscription: {
    newUser: {
      subscribe: (root, args, { pubsub }) => {
        console.log(pubsub);
        return pubsub.asyncIterator(NEW_USER);
      }
    }
  }
};
