import Grid from "@material-ui/core/Grid";
import * as feedQueries from "../helpers/feedDataHelper";
import { HttpLink } from "apollo-link-http";
import React, { Component } from "react";
import { Twitter, GithubBox } from "mdi-material-ui";

import Feed from "./feed";

const GITHUB_BEARER_TOKEN = process.env.GITHUB_BEARER_TOKEN;
const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

export default class FeedContainer extends Component {
  feedFetchData = this.props.feedFetchData || [
    {
      key: "tw",
      title: "Twitter",
      subheader: "Tweets",
      icon: <Twitter />,
      graphqlQuery: feedQueries.GET_CREATED_ISSUE_QUERY,
      baseUrl: new HttpLink({
        uri: "https://api.github.com/graphql",
        fetchOptions: { method: "GET" },
        headers: {
          authorization: TWITTER_BEARER_TOKEN
            ? `Bearer ${TWITTER_BEARER_TOKEN}`
            : null
        }
      }),
      link: "https://www.twitter.com/the_power_coder"
    },
    {
      key: "ghpr",
      title: "GitHub",
      icon: <GithubBox />,
      subheader: "Open Pull Requests",
      graphqlQuery: feedQueries.GET_CREATED_ISSUE_QUERY,
      baseUrl: new HttpLink({
        uri: "https://api.github.com/graphql",
        fetchOptions: { method: "GET" },
        headers: {
          authorization: GITHUB_BEARER_TOKEN
            ? `Bearer ${GITHUB_BEARER_TOKEN}`
            : null
        }
      }),
      link:
        "https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Asilne30+archived%3Afalse+&type="
    },
    {
      key: "ghci",
      title: "GitHub",
      icon: <GithubBox />,
      subheader: "Open Created Issues",
      graphqlQuery: feedQueries.GET_CREATED_ISSUE_QUERY,
      baseUrl: new HttpLink({
        uri: "https://api.github.com/graphql",
        fetchOptions: { method: "GET" },
        headers: {
          authorization: GITHUB_BEARER_TOKEN
            ? `Bearer ${GITHUB_BEARER_TOKEN}`
            : null
        }
      }),
      link:
        "https://github.com/search?q=is%3Aopen+is%3Aissue+author%3Asilne30+archived%3Afalse"
    },
    {
      key: "ghai",
      title: "GitHub",
      icon: <GithubBox />,
      subheader: "Open Assigned Issues",
      graphqlQuery: feedQueries.GET_CREATED_ISSUE_QUERY,
      baseUrl: new HttpLink({
        uri: "https://api.github.com/graphql",
        fetchOptions: { method: "GET" },
        headers: {
          authorization: GITHUB_BEARER_TOKEN
            ? `Bearer ${GITHUB_BEARER_TOKEN}`
            : null
        }
      }),
      link:
        "https://github.com/search?q=is%3Aopen+is%3Aissue+assignee%3Asilne30+archived%3Afalse"
    }
  ];
  render() {
    return (
      <Grid container spacing={40}>
        {this.feedFetchData.map(feedData => (
          <Feed key={feedData.key} data={feedData} />
        ))}
      </Grid>
    );
  }
}
