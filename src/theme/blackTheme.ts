import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blackTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
  },
});
