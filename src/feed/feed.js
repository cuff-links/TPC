import React, { Component } from "react";
import PropTypes from "prop-types";
import { Get } from "react-axios";
import {
  Grid,
  Toolbar,
  Typography,
  IconButton,
  CircularProgress,
  List,
  withStyles
} from "@material-ui/core";
import FeedListingItem from "./feed_listing";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 240
  },
  listSection: {
    backgroundColor: "inherit"
  },
  listHeader: {
    backgroundColor: theme.palette.primary.light
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
});

class Feed extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  renderResponse(error, response, isLoading) {
    if (error) {
      return <div>Something bad happened: {error.message}</div>;
    } else if (isLoading) {
      return <CircularProgress size={48} />;
    } else if (response !== null) {
      console.log(response);
      if (response.data.items) {
        return response.data.items.map(githubItem => (
          <FeedListingItem
            key={githubItem.id}
            html_url={githubItem.html_url}
            heading={githubItem.title}
            created={githubItem.created_at}
          />
        ));
      } else if (response.statuses) {
        return response.data.statuses.map(twitterItem => (
          <FeedListingItem
            key={twitterItem.id_str}
            html_url={"https://twitter.com/statuses/" + twitterItem.id}
            heading={twitterItem.text}
            created={twitterItem.created_at}
          />
        ));
      }
    }
    return null;
  }
  render() {
    const feedData = [this.props.data];
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        {feedData.map(feedListingItemData => (
          <div key={feedListingItemData.key}>
            <Toolbar className={classes.listHeader}>
              <IconButton color="inherit" aria-label="Menu">
                {feedListingItemData.icon}
              </IconButton>
              <Typography variant="title" color="inherit">
                {feedListingItemData.subheader}
              </Typography>
            </Toolbar>
            <List className={classes.root}>
              <Get
                url={feedListingItemData.baseUrl}
                config={{
                  headers: feedListingItemData.headers
                }}
              >
                {this.renderResponse}
              </Get>
            </List>
          </div>
        ))}
      </Grid>
    );
  }
}
Feed.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Feed);
