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
import { menuPrimary } from "components/theme/mocks";

const useStyles = makeStyles({
  root: {
    '& .fa .fas .far .fab': { fontSize: 20 },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

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
          {menuPrimary.map(({ path, text, icon }, index) => (
            <Link key={index} href={path}>
              <ListItem button>
                <ListItemIcon>
                  <i className={icon} />
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
          <i className="fas fa-bars" onClick={toggleDrawer("left", true)} />
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
