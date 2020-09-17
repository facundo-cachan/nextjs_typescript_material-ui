import { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import {
  Icon,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogProps,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

export default function ScrollDialog({
  children,
  btn: { size, color, icon },
}: any) {
  const theme = useTheme(),
    [open, setOpen] = useState(false),
    [scroll, setScroll] = useState<DialogProps["scroll"]>("paper"),
    handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
      setOpen(true);
      setScroll(scrollType);
    },
    handleClose = () => {
      setOpen(false);
    },
    fullScreen = useMediaQuery(theme.breakpoints.down("sm")),
    descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
      <Button size={size} color={color} onClick={handleClickOpen("paper")}>
        <Icon>{icon}</Icon>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
          <Button onClick={handleClose} color="primary">
            Another Action
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
