import React, { Component } from "react";
import { Get } from "react-axios";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  CircularProgress
} from "@material-ui/core";
import { Web } from "mdi-material-ui";
import FeedListingItem from "./feed_listing";

const styles = {
  card: {
    height: 250,
    marginBottom: 20,
    marginTop: 20
  }
};

export default class Feed extends Component {
  //prettier-ignore
  renderResponse(error, response, isLoading) {
    if(error) {
      return (<div>Something bad happened: {error.message}</div>)
    } else if(isLoading) {
      return (<CircularProgress size={48} />)
    } else if(response !== null) {
      console.log(response);
      return (<FeedListingItem key={this.props.data.key} listingData={response.data}></FeedListingItem>)
    }
    return null
  }
  render() {
    const feedData = [this.props.data];
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        {feedData.map(feedListingItemData => (
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
                <a target="_blank" href={feedListingItemData.link}>
                  <IconButton>
                    <Web />
                  </IconButton>
                </a>
              }
            />
            <CardContent>
              <code>
                <Get
                  url={feedListingItemData.baseUrl}
                  config={{
                    headers: feedListingItemData.headers,
                    crossDomain: true
                  }}
                >
                  {this.renderResponse.bind(this)}
                </Get>
              </code>
            </CardContent>
          </Card>
        ))}
      </Grid>
    );
  }
}
