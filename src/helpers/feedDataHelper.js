import gql from "graphql-tag";

export const GET_OPEN_PR_QUERY = () => {
  return gql`
    {
      
    }
  `;
};

export const GET_ASSIGNED_ISSUE_QUERY = () => {
  return gql`
    {
      issue(author:'silne30')
    }
  `;
};

export const GET_OPEN_ISSUE_QUERY = () => {
  return gql`
    {
      dogs {
        id
        breed
      }
    }
  `;
};

export const GET_CREATED_ISSUE_QUERY = gql`
  query FeedQuery {
    issue(author: "silne30") {
      header: title
    }
  }
`;
