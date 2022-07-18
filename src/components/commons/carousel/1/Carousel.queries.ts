import { gql } from "@apollo/client";

export const FETCH_NOVEL_CYCLES_LAST_ORDER = gql`
  query fetchNovelCyclesPageLastOrder($page: Int) {
    fetchNovelCyclesPageLastOrder(page: $page) {
      novels {
        id
        title
        files {
          id
          name
          path
          url
        }
      }
    }
  }
`;

export const FETCH_NOVEL_CYCLES_LIKE_ORDER = gql`
  query fetchNovelCyclesPageLikeOrder($page: Int) {
    fetchNovelCyclesPageLikeOrder(page: $page) {
      novels {
        id
        title
        likeCount
        files {
          id
          name
          path
          url
        }
      }
    }
  }
`;