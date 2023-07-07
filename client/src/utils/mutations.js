import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
          _id
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }`

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          _id
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }`

export const SAVE_BOOK = gql`
mutation SaveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      email
      password
      username
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }`

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      email
      password
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
      username
    }
  }`  
