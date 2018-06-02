import { React, Component } from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import  FeedListingItem  from './feed_listing'


export default class Feed extends Component {
  render() {
    const feedData = this.props.data;
    return (
      <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
                {
                    feedData.map(feedListingItemData => (
                        <FeedListingItem key={feedListingItemData.key} listingData={feedListingItemData} />
                    ))
                }
            </CardContent>
          </Card>
      </Grid>
    )
  }
}