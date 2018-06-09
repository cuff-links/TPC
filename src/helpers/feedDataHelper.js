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
  {
    user(login: "silne30") {
      issues(first: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
            header: title
          }
        }
      }
    }
  }
`;

export const GET_TWEETS_QUERY = gql`
  {
    person @rest(type: "Person", path: "people/1/") {
      name
    }
  }
`;
