import { grey, lightblue } from "@material-ui/core/colors";
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import {
  AppBar,
  Tooltip,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BuildIcon from "@material-ui/icons/Build";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import classNames from "classnames";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import React, { Component } from "react";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import FeedContainer from "../feed/feed_container";

const drawerWidth = 240;

const styles = theme => ({
  secondary: {
    main: lightblue
  },
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    backgroundColor: "#cdcdcd",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    "min-height": "calc(100% - 64px)",
    top: 64
  }
});

class Navbar extends Component {
  static navTabs = [
    { key: "hm", icon: HomeIcon, title: "Home", component: FeedContainer },
    { key: "fd", icon: RssFeedIcon, title: "Feed", component: FeedContainer },
    {
      key: "wk",
      icon: WorkIcon,
      title: "Experience",
      component: FeedContainer
    },
    { key: "sk", icon: BuildIcon, title: "Skills", component: FeedContainer },
    {
      key: "sc",
      icon: SchoolIcon,
      title: "Education",
      component: FeedContainer
    },
    { key: "ps", icon: PersonIcon, title: "Contact", component: FeedContainer }
  ];

  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar
            color="default"
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                John Dorlus
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <div>
                {Navbar.navTabs.map(item => (
                  <Tooltip key={item.key} title={item.title}>
                    <ListItem
                      button
                      component={NavLink}
                      to={"/" + item.title.toLowerCase()}
                    >
                      <ListItemIcon>
                        {React.createElement(item.icon, null, null)}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  </Tooltip>
                ))}
              </div>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <div id="content">
              <Typography noWrap>
                {"You think water moves fast? You should see ice."}
              </Typography>
              {Navbar.navTabs.map(item => (
                <Route
                  key={item.key}
                  path={`/${item.title.toLowerCase()}`}
                  component={item.component}
                />
              ))}
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Navbar);
