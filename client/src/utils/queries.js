import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    query user($userName: String){
        User($userName: String){
            _id
            userName
            password
            hosting{
                _id
                title
                description
                theme
            }
            invited{
                _id
                title
                description
                theme
            }
        }
    }
`;

export const QUERY_USERS = gql`
  query allUsers {
    User {
      _id
      userName
    }
  }
`;

export const QUERY_EVENTS = gql`
  query event {
    Event {
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

export const QUERY_EVENT = gql`
  query event (){
    Event {
      _id
      title
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
