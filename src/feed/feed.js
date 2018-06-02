import React , { Component } from 'react';
import { Grid, Card, CardContent, CardHeader, Avatar, IconButton } from '@material-ui/core';
import { Web } from 'mdi-material-ui';
import  FeedListingItem  from './feed_listing'

const styles = {
    card: {
        'height': 250,
        'marginBottom': 20,
        'marginTop': 20
    }
}

export default class Feed extends Component {
  render() {
    const feedData = [this.props.data];
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3} >
      {
          feedData.map(feedListingItemData => (
            <Card key={feedListingItemData.key} style={styles.card}>
              <CardHeader 
                avatar={
                  <Avatar aria-label={feedListingItemData.title}>
                    {feedListingItemData.icon}
                  </Avatar>
                }
                title={feedListingItemData.title} 
                subheader={feedListingItemData.subheader}
                action={
                  <a target='_blank' href={feedListingItemData.link}>
                    <IconButton>
                      <Web />
                    </IconButton>
                  </a>
                }>
                </CardHeader>
              <CardContent>
                  <FeedListingItem listingData={feedListingItemData} />  
              </CardContent>
            </Card>
        ))
      }
      </Grid>
    )
  }
}