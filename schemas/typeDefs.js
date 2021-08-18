const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    hosting: [Event]
    invited: [Event]
  }

  type Event {
    _id: ID
    title: String
    description: String
    theme: String
    host: User
    invitedGuests: [User]
    goingGuests: [User]
    isPrivate: Boolean
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(userName: String): User
    allUsers: User
    allEvents: [Event]
    event(_id: ID): Event
  }

  type Mutation {
    addUser(userName: String, email: String, password: String): Auth
    login(email: String, password: String): Auth
    editUser(userName: String, email: String, password: String): Auth
    addEvent(title: String, description: String, theme: String): Event
    editEvent(
      eventId: ID
      title: String
      description: String
      theme: String
    ): eventUpdate
    cancelEvent(eventId: ID): eventUpdate
    addGuest(eventId: ID, guestId: String): Event
  }

  type eventUpdate {
    success: Boolean
    message: String
    events: [Event]
  }
`;

module.exports = typeDefs;
