import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
        hosting {
          _id
          title
          description
          theme
        }
        invited {
          _id
          title
          description
          theme
        }
      }
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser($email: String, $userName: String, $password: String) {
    editUser(email: $email, userName: $userName, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($email: String, $userName: String, $password: String) {
    addUser(email: $email, userName: $userName, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation AddEvent($title: String, $description: String, $theme: String) {
    addEvent(title: $title, description: $description, theme: $theme) {
      _id
      title
      description
      theme
      host {
        _id
        userName
      }
    }
  }
`;

export const EDIT_EVENT = gql`
  mutation EditEvent($title: Sting, $description: String, $theme: String) {
    editEvent(title: $title, description: $description, theme: $theme) {
      _id
      title
      description
      theme
      host {
        userName
      }
    }
  }
`;

export const ADD_GUEST = gql`
  mutation AddGuest($eventId: ID, $guestId: ID) {
    addGuest(eventId: $eventId, guestId: $guestId) {
      _id
      userName
    }
  }
`;
