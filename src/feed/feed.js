import React , { Component } from 'react';
import { Grid, Card, CardContent, CardHeader } from '@material-ui/core';
import  FeedListingItem  from './feed_listing'

const styles = {
    card: {
        height: 250,
        'margin-bottom': 20,
        'margin-top': 20
    }
}

export default class Feed extends Component {
  render() {
    const feedData = this.props.data;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3} >
      {
        Object.keys(feedData).map(feedListingItemData => (
          <Card style={styles.card}>
          <CardHeader>{feedListingItemData.title}</CardHeader>
            <CardContent>
                <FeedListingItem key={feedListingItemData.key} listingData={feedListingItemData} />  
            </CardContent>
          </Card>
        ))
        }
      </Grid>
    )
  }
}