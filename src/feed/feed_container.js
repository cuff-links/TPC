import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Feed from './feed'

const feedFetchData = [
  {
    'key': 'tw',
    'title': 'Twitter: Tweets',
    'icon': 'twitter',
    'graphqlRequest': '',
    'link': 'https://www.twitter.com/the_power_coder'
  },
  {
    'key': 'ghpr',
    'feedName': 'GitHub: Created Pull Requests',
    'graphqlRequest': '',
    'link': 'https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Asilne30+archived%3Afalse+&type='
  },
  {
    'key': 'ghci',
    'feedName': 'GitHub: Created Issues',
    'graphqlRequest': '',
    'link': 'https://github.com/search?q=is%3Aopen+is%3Aissue+author%3Asilne30+archived%3Afalse'
  },
  {
    'key': 'ghai',
    'feedName': 'GitHub: Assigned Issues',
    'graphqlRequest': '',
    'link': 'https://github.com/search?q=is%3Aopen+is%3Aissue+assignee%3Asilne30+archived%3Afalse'
  }
]

export default class FeedContainer extends Component {
  render() {
    return (
      <Grid container  spacing={40} > 
      {
        feedFetchData.map(feedData => (
          <Feed key={feedData.key} data={feedData} />
        ))
      }
      </Grid>
    )
  }
}