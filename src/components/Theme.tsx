import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    text: {
      primary: "#464646",
      secondary: "#626161",
    },
    primary: {
      main: "#858FF1",
    },
    secondary: {
      main: "#edf2ff",
    },
    info: {
      main: "#70B4E0",
    },
    background: {
      default: "#ffffff",
    },
    error: {
      main: "#F90C0C",
    },
    grey: {
      100: "#CDCDCD",
      200: "#ECECEC",
      300: "#EDEDED",
      400: "#FAFAFA",
      500: "#D9D9D9",
      600: "#898888",
      700: "#6D6D6D",
    },
  },
});

export default Theme;
