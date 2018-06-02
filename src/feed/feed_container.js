import { React, Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Feed from './feed'

const feedFetchData = [
  {
    key: 'tw',
    'feedName': 'Tweets',
    'graphqlRequest': '',
    'link': ''
  },
  {
    key: 'ghpr',
    'feedName': 'GitHub PRs',
    'graphqlRequest': '',
    'link': ''
  },
  {
    key: 'ghci',
    'feedName': 'GitHub Created Issues',
    'graphqlRequest': '',
    'link': ''
  },
  {
    'key': 'ghai',
    'feedName': 'GitHub Assigned Issues',
    'graphqlRequest': '',
    'link': ''
  }
]

export default class FeedContainer extends Component {
  render() {
    return (
      <Grid container > 
      {
        feedFetchData.map(feedData => (
          <Feed key={feedData.key} data={feedData} />
        ))
      }
          What it do, what it do?
      </Grid>
    )
  }
}