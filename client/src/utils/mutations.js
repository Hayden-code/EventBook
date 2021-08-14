import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
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

export const ADD_USER = gql`
  mutation AddUser($email: String!, $userName: String!, $password: String!) {
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
  mutation AddEvent(
    $title: String!
    $description: String
    $theme: String
    $host: String
  ) {
    addEvent(
      title: $title
      description: $description
      theme: $theme
      host: $host
    ) {
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
  mutation EditEvent($title: Sting, $description: String, $theme: String) {
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
  mutation AddGuest($eventId: ID, $guestId: ID) {
    addGuest(eventId: $eventId, guestId: $guestId) {
      _id
      userName
    }
  }
`;
