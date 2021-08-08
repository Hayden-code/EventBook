import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $description: String, $theme: String) {
    addEvent(title: $title, description: $description, theme: $theme) {
      _id
      title
      description
      theme
      host {
        _id
        userName
      }
      invitedGuests {
        _id
        userName
      }
      goingGuests {
        _id
        userName
      }
      isPrivate
    }
  }
`;

export const EDIT_EVENT = gql`
  mutation editEvent($title: Sting, $description: String, $theme: String) {
    editEvent(title: $title, description: $description, theme: $theme) {
      _id
      title
      description
      theme
      host {
        _id
        userName
      }
      invitedGuests {
        _id
        userName
      }
      goingGuests {
        _id
        userName
      }
      isPrivate
    }
  }
`;

export const ADD_GUEST = gql`
  mutation addGuest($eventId: ID, $guestId: ID) {
    addGuest(eventId: $eventId, guestId: $guestId) {
      _id
      userName
    }
  }
`;
