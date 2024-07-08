"use client";
import { createTheme } from "@mui/material";

export const Theme = createTheme({
  typography: {
    fontFamily: "NanumSquareRound",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "NanumSquareRound",
          src: 'url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff) format("woff")',
          fontWeight: "normal",
          fontStyle: "normal",
        },
        html: {
          maxWidth: "100%",
          overflowX: "hidden",
        },
        body: {
          maxWidth: "100%",
          overflowX: "hidden",
        },
        input: {
          "&:focus": {
            outline: "none",
          },
        },
        select: {
          "&:focus": {
            outline: "none",
          },
        },
        option: {
          "&:focus": {
            outline: "none",
          },
        },
        textarea: {
          "&:focus": {
            outline: "none",
          },
        },
        button: {
          "&:focus": {
            outline: "none",
          },
        },
        ".srOnly": {
          overflow: "hidden",
          position: "absolute",
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          width: "1px",
          height: "1px",
          margin: "-1px",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: "div",
          body2: "span",
        },
      },
    },
  },
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
    success: {
      main: "#0088E0",
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
