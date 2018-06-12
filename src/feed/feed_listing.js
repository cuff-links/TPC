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
        <ListItem button>
          <a target="_blank" href={this.props.html_url}>
            <ListItemText
              primary={this.props.heading.substring(0, 29) + "..."}
            />
            <ListItemSecondaryAction>
              <ListItemIcon>
                <Web />
              </ListItemIcon>
            </ListItemSecondaryAction>
          </a>
        </ListItem>
      </Grid>
    );
  }
}
