import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a Style instance.
const Style = createMuiTheme({
  palette: {
    primary: {
      main: "#5858FA",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#CEF6F5",
    },
  },
});

export default Style;
