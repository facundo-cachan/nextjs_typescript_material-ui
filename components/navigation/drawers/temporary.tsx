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
  Icon,
} from "@material-ui/core";

import Link from "next/link";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}), items = [
  { path: "/", text: "Home", icon: "home" },
  { path: "/about", text: "About", icon: "adb" },
  { path: "/ingreso", text: "Acceso", icon: "lock-open" },
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
                  <Icon>{icon}</Icon>
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
          <Icon onClick={toggleDrawer("left", true)}>menu</Icon>
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
