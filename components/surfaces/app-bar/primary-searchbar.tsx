import { useState, MouseEvent } from "react";
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
  Icon,
  MenuItem,
} from "@material-ui/core";
import { userMessages, cartShopItems, auth } from "components/theme/mocks";
import { DrawerTemporary } from "@components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
        width: "20ch",
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
    btnsToolbar = (
      icon: any,
      label?: string | null,
      badge?: number,
      fn?: any,
      ctrl?: string
    ) => (
      <>
        <IconButton
          onClick={fn}
          aria-label={label ? label : "Default label"}
          aria-controls={ctrl && ctrl}
          aria-haspopup="true"
          color="inherit"
        >
          {badge ? (
            <Badge badgeContent={badge} color="secondary">
              <i className={icon} />
            </Badge>
          ) : (
            <Icon className={icon} />
          )}
        </IconButton>
        {label && <p>{label}</p>}
      </>
    );
  const menuId = "account-menu",
    popupMenuAccount = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    ),
    menuCartShop = "shop-cart-menu",
    popupMenuCartShop = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuCartShop}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    ),
    mobileMenuId = "account-menu-mobile",
    renderMobileMenu = (
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
          {userMessages.length >= 1 &&
            btnsToolbar("fas fa-envelope", "Messages", userMessages.length)}
        </MenuItem>
        <MenuItem>
          {cartShopItems.length >= 1 &&
            btnsToolbar("fas fa-shopping-cart", "Compra", cartShopItems.length)}
        </MenuItem>
        <MenuItem>
          {btnsToolbar(
            "fas fa-user-circle",
            "Perfil",
            0,
            handleProfileMenuOpen,
            menuId
          )}
        </MenuItem>
      </Menu>
    );

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
              <Icon className="fas fa-search" />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          {auth && (
            <>
              <div className={classes.sectionDesktop}>
                {userMessages.length >= 1 &&
                  btnsToolbar("fas fa-envelope", null, userMessages.length)}
                {cartShopItems.length >= 1 &&
                  btnsToolbar(
                    "fas fa-shopping-cart",
                    null,
                    cartShopItems.length
                  )}
                {btnsToolbar(
                  "fas fa-user-circle",
                  null,
                  0,
                  handleProfileMenuOpen,
                  menuId
                )}
              </div>
              <div className={classes.sectionMobile}>
                {btnsToolbar(
                  "fas fa-ellipsis-v",
                  null,
                  0,
                  handleMobileMenuOpen,
                  mobileMenuId
                )}
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {popupMenuAccount}
      {popupMenuCartShop}
    </div>
  );
}
