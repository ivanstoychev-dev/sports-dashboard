import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    gameRow: string;
  }
  interface Palette {
    borderColor: {
      primary: string;
    };
  }

  interface PaletteOptions {
    borderColor?: {
      primary: string;
    };
  }
}
