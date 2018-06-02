import React, { Component } from 'react';
import { Grid } from '@material-ui/core';


export default class FeedListingItem extends Component {
  render() {
    return (
      <Grid item>
          <h3 key={this.props.listingData.key}>{this.props.listingData}</h3>
      </Grid>
    )
  }
}