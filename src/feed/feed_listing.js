import React, { Component } from "react";
import { Grid } from "@material-ui/core";

export default class FeedListingItem extends Component {
  render() {
    return (
      <Grid item key={this.props.listingData.key}>
        <h3 key={this.props.listingData.key}>{this.props.listingData.title}</h3>
      </Grid>
    );
  }
}
