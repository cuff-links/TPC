import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Feed from './feed'
import { Twitter, GithubBox} from 'mdi-material-ui';

export default class FeedContainer extends Component {
  feedFetchData = this.props.feedFetchData || [
    {
      'key': 'tw',
      'title': 'Twitter',
      'subheader': 'Tweets',
      'icon':   <Twitter />,
      'graphqlRequest': '',
      'link': 'https://www.twitter.com/the_power_coder'
    },
    {
      'key': 'ghpr',
      'title': 'GitHub',
      'icon':   <GithubBox />,
      'subheader': 'Open Pull Requests',
      'graphqlRequest': '',
      'link': 'https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Asilne30+archived%3Afalse+&type='
    },
    {
      'key': 'ghci',
      'title': 'GitHub',
      'icon':   <GithubBox />,
      'subheader': 'Open Created Issues',
      'graphqlRequest': '',
      'link': 'https://github.com/search?q=is%3Aopen+is%3Aissue+author%3Asilne30+archived%3Afalse'
    },
    {
      'key': 'ghai',
      'title': 'GitHub',
      'icon':   <GithubBox />,
      'subheader': 'Open Assigned Issues',
      'graphqlRequest': '',
      'link': 'https://github.com/search?q=is%3Aopen+is%3Aissue+assignee%3Asilne30+archived%3Afalse'
    }
  ]
  render() {
    return (
      <Grid container spacing={40} > 
      {
        this.feedFetchData.map(feedData => (
          <Feed key={feedData.key} data={feedData} />
        ))
      }
      </Grid>
    )
  }
  fetchDataFromSource() {
    
  }
  componentDidMount() {

  }
}