import React, { useState, MouseEvent } from "react";
import { useRouter } from "next/router";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { DrawerTemporary } from "@components";
import { userMessages } from "components/theme/mocks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ".fa .fas .far": { margin: "0 1rem 0 1rem" },
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "30ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

export default function AppBarPrimarySearch({ appName }: any) {
  const classes = useStyles(),
    router = useRouter(),
    [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null),
    [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(
      null
    ),
    isMenuOpen = Boolean(anchorEl),
    isMobileMenuOpen = Boolean(mobileMoreAnchorEl),
    handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    },
    handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    },
    handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget);
    },
    handleClick = (href: string) => {
      handleMenuClose();
      router.push(href);
    },
    menuId = "primary-search-account-menu",
    mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <DrawerTemporary />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {appName}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <i className="fas fa-search" />
            </div>
            <InputBase
              placeholder="Buscar ..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              {userMessages && userMessages.length >= 1 ? (
                <Badge badgeContent={userMessages.length} color="secondary">
                  <i className="far fa-envelope" />
                </Badge>
              ) : (
                <i className="far fa-envelope-open" />
              )}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <i className="far fa-user-circle" />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <i className="fas fa-ellipsis-v" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <i className="far fa-envelope" />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <i className="fas fa-comment-alt" />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <i className="fas fa-users-cog" />
          </IconButton>
          <p>Account</p>
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
      >
        <MenuItem onClick={() => handleClick("profile")}>
          <IconButton
            aria-label="My Profile"
            aria-haspopup="true"
            color="inherit"
          >
            <i className="far fa-id-card" />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
        <MenuItem onClick={() => handleClick("about")}>
          <IconButton
            aria-label="LogOff"
            aria-haspopup="true"
            color="inherit"
          >
            <i className="fas fa-sign-out-alt" />
          </IconButton>
          <p>LogOff</p>
        </MenuItem>
      </Menu>
    </div>
  );
}
