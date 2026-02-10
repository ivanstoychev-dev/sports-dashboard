import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2c2b2c",
    },
    secondary: {
      main: "#e63946",
    },
    background: {
      default: "#1f1f1f",
      gameRow: "#262626",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
    borderColor: {
      primary: "#8f8f8f",
    },
  },
  shape: {
    borderRadius: 8,
  },
});
