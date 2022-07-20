import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments {
    fetchComments {
      id
      contents
      user {
        nickName
      }
      children {
        id
        contents
      }
    }
  }
`;

export const CREATE_NESTED_COMMENT = gql`
  mutation createComment(
    $boardID: String!
    $createCommentInput: CreateCommentInput!
  ) {
    createComment(boardID: $boardID, createCommentInput: $createCommentInput) {
      id
      contents
      user {
        nickName
      }
    }
  }
`;

export const FETCH_COMMENT = gql`
  query fetchComment($commentID: String!) {
    fetchComment(commentID: $commentID) {
      children {
        id
      }
    }
  }
`;

export const FETCH_COMMENTS_FROM_BOARD = gql`
  query fetchCommentsFromBoard($boardID: String!) {
    fetchCommentsFromBoard(boardID: $boardID) {
      id
      contents
      user {
        nickName
      }
      createAt
      children {
        id
        contents
        createAt
      }
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardID: String!) {
    fetchBoard(boardID: $boardID) {
      comments {
        id
        contents
        createAt
        user {
          id
          nickName
        }
        children {
          id
          contents
        }
      }
    }
  }
`;
