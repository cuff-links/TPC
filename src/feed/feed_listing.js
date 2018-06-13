import React, { Component } from "react";
import {
  Grid,
  ListItemText,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction
} from "@material-ui/core";
import { Web } from "mdi-material-ui";

export default class FeedListingItem extends Component {
  render() {
    return (
      <Grid>
        <ListItem key={this.props.key} button>
          <ListItemText primary={this.props.heading.substring(0, 29) + "..."} />
          <ListItemSecondaryAction>
            <ListItemIcon>
              <a target="_blank" href={this.props.html_url}>
                <Web />
              </a>
            </ListItemIcon>
          </ListItemSecondaryAction>
        </ListItem>
      </Grid>
    );
  }
}
