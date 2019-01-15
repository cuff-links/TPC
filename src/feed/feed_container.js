import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import { Twitter, GithubBox } from "mdi-material-ui";

import Feed from "./feed";

const REACT_APP_GITHUB_BEARER_TOKEN = process.env.REACT_APP_GITHUB_BEARER_TOKEN;
const REACT_APP_TWITTER_BEARER_TOKEN =
  process.env.REACT_APP_TWITTER_BEARER_TOKEN;
export default class FeedContainer extends Component {
  feedFetchData = this.props.feedFetchData || [
    {
      key: "tw",
      title: "Twitter",
      subheader: "Tweets",
      icon: <Twitter />,
      baseUrl:
        "https://api.twitter.com/1.1/search/tweets.json?q=from:The_Power_Coder",
      link: "https://www.twitter.com/the_power_coder",
      headers: { Authorization: "Bearer " + REACT_APP_TWITTER_BEARER_TOKEN }
    },
    {
      key: "ghopr",
      title: "GitHub",
      icon: <GithubBox />,
      subheader: "Open Created PRs",
      baseUrl:
        "https://api.github.com/search/issues?q=author:silne30+type:pr+state:open",
      link:
        "https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Asilne30+archived%3Afalse+&type=",
      headers: { Authorization: "Bearer " + REACT_APP_GITHUB_BEARER_TOKEN }
    },
    {
      key: "ghmpr",
      title: "GitHub",
      icon: <GithubBox />,
      subheader: "Merged/Closed PRs",
      baseUrl:
        "https://api.github.com/search/issues?q=author:silne30+type:pr+state:closed",
      link:
        "https://github.com/search?utf8=%E2%9C%93&q=is%3Amerged+is%3Apr+author%3Asilne30+archived%3Afalse+&type=",
      headers: { Authorization: "Bearer " + REACT_APP_GITHUB_BEARER_TOKEN }
    },
    {
      key: "ghci",
      title: "GitHub",
      icon: <GithubBox />,
      subheader: "Open Created Issues",
      baseUrl:
        "https://api.github.com/search/issues?q=author:silne30+state:open",
      link:
        "https://github.com/search?q=is%3Aopen+is%3Aissue+author%3Asilne30+archived%3Afalse",
      headers: { Authorization: "Bearer " + REACT_APP_GITHUB_BEARER_TOKEN }
    },
    {
      key: "ghai",
      title: "GitHub",
      icon: <GithubBox />,
      subheader: "Open Assigned Issues",
      baseUrl:
        "https://api.github.com/search/issues?q=assignee:silne30+state:open",
      link:
        "https://github.com/search?q=is%3Aopen+is%3Aissue+assignee%3Asilne30+archived%3Afalse",
      headers: { Authorization: "Bearer " + REACT_APP_GITHUB_BEARER_TOKEN }
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
