import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
export default class WorkContainer extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper id="homepage-pic" className="homepage-profile-box">
            Whatchu gonna do when dey come foh you?
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <Paper className="homepage-profile-box">
            Whatchu gonna do when dey come foh you?
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
