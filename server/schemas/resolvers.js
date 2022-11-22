const { AuthenticationError } = require("apollo-server-express");
const { User, Posting, Comment } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    postings: async () => {
      return await Posting.find().populate("owner").populate("registered");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("postings");
      }
    },
    singlePost: async (parent, { _id }, context) => {
      return Posting.findOne({ _id }).populate("comments").populate("owner");
    },
    users: async () => {
      return User.find();
    },
    comments: async () => {
      return Comment.find();
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (
      parent,
      { _id, firstName, lastName, email, password },
      context
    ) => {
      return User.findByIdAndUpdate(
        _id,
        { firstName, lastName, email, password },
        {
          new: true,
        }
      );
    },

    deleteUser: async (parent, { _id }, context) => {
      return User.findByIdAndDelete({ _id });
    },
    addPosting: async (parent, args, context) => {
      return Posting.create(args);
    },
    updatePosting: async (parent, { _id, title, description }, context) => {
      return Posting.findByIdAndUpdate(
        _id,
        { title, description },
        { new: true }
      );
    },
    deletePosting: async (parent, { _id }, context) => {
      return Posting.findByIdAndDelete({ _id });
    },
    addComment: async (parent, args, context) => {
      return Comment.create(args);
    },
    updateComment: async (parent, { _id, content }, context) => {
      return Comment.findByIdAndUpdate(_id, { content }, { new: true });
    },
    deleteComment: async (parent, { _id }, context) => {
      return Comment.findByIdAndDelete({ _id });
    },
  },
};
module.exports = resolvers;
