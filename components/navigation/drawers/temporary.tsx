import { useState, KeyboardEvent, MouseEvent } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import Link from "next/link";

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  }),
  items = [
    { path: "/", text: "Home", icon: "far fa-play-circle" },
    { path: "/about", text: "About", icon: "far fa-address-card" },
    { path: "/ingreso", text: "Acceso", icon: "fas fa-sign-in-alt" },
  ];

type Anchor = "left";

export default function DrawerTemporary() {
  const classes = useStyles(),
    [state, setState] = useState({
      left: false,
    }),
    toggleDrawer = (anchor: Anchor, open: boolean) => (
      event: KeyboardEvent | MouseEvent
    ) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    },
    list = (anchor: Anchor) => (
      <div
        className={clsx(classes.list, classes.fullList)}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {items.map(({ path, text, icon }, index) => (
            <Link key={index} href={path}>
              <ListItem button>
                <ListItemIcon>
                <i className={icon}/>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </div>
    );
  return (
    <div>
      {
        <>
          <i className="fas fa-bars" onClick={toggleDrawer("left", true)}/>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </>
      }
    </div>
  );
}
