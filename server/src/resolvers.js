const User = require("./Models/User");
const OneSignal = require("onesignal-node");
const NEW_USER = "NEW_USER";
const client = new OneSignal.Client(
  "6e929521-00bc-42b5-99a3-a48bff012616",
  "YmM4MWM5NDYtMjM5NC00ZTlmLTg5ZjQtMzNhODRhMGE5Y2Qz"
);

const sendNotification = async () => {
  const notification = {
    contents: {
      pt: "Olha a notificação aeeeeee",
      en: "olhaa  a notificação aeee"
    },
    included_segments: ["Active Users"]
  };
  try {
    const response = await client.createNotification(notification);
    console.log(response.body.id);
    console.log("deu certo");
  } catch (e) {
    if (e instanceof OneSignal.HTTPError) {
      // When status code of HTTP response is not 2xx, HTTPError is thrown.
      console.log(e.statusCode);
      console.log(e.body);
    }
  }
};

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
      sendNotification();
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
