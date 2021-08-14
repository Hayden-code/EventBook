const { AuthenticationError } = require("apollo-server-express");
const { User, Event } = require("../models");
const { findOneAndUpdate, findOneAndDelete } = require("../models/user");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in...");
    },
    allUsers: async () => {
      return User.find({});
    },
    allEvents: async () => {
      return Event.find({});
    },
    event: async (parent, eventId) => {
      return Event.findOne({ _id: eventId });
    },
  },
  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({ userName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    editUser: async (parent, { email, userName, password }, context) => {
      if (context.user) {
        const userUpdate = await User.findOneAndUpdate(
          { _id: context.user._id },
          { userName: userName, email: email, password: password }
        );
        const token = signToken(userUpdate);
        return { token, updatedUser };
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      const pw = await user.checkPassword(password);
      if (!user || !pw) {
        throw new AuthenticationError(
          "Invalid details. Please check email and password and try again."
        );
      }
      const token = signToken(user);
      return { token, user };
    },
    addEvent: async (parent, { title, description, theme }, context) => {
      if (context.user) {
        const event = await Event.create({
          title,
          description,
          theme,
          host: context.user.userName,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { hosting: event.id } }
        );
        return event;
      }
      throw new AuthenticationError("You need to be logged in...");
    },
    editEvent: async (
      parent,
      { eventId, title, description, theme, isPrivate },
      context
    ) => {
      if (context.user) {
        return Event.findOneAndUpdate(
          { _id: eventId },
          {
            $set: {
              title: title,
              description: description,
              theme: theme,
              isPrivate: isPrivate,
            },
          }
        );
      }
    },
    cancelEvent: async (parent, eventId, context) => {
      if (context.user) {
        const deleteEvent = Event.findOneAndDelete({ _id: eventId });
        await User.findOneAndDelete(
          { _id: context.user._id },
          { $pull: { hosting: event._id } }
        );
        return deleteEvent;
      }
    },
    addGuest: async (parent, { eventId, guestId }, context) => {
      if (context.user) {
        guestAdded = await Event.findOneAndUpdate(
          { _id: eventId },
          {
            $addToSet: {
              guestId: guestId,
            },
          }
        );
        await User.findOneAndUpdate(
          { _id: guestId },
          {
            $addToSet: {
              invited: eventId,
            },
          }
        );
        return guestAdded;
      }
    },
    // removeGuest: async (parent, args) => {
    //   // Need code
    // },
    // goingGuest: async (parent, args) => {
    //   // Need code
    // },
  },
};

module.exports = resolvers;
