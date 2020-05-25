import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3E4A74",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
