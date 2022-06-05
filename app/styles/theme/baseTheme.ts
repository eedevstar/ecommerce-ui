import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";

// create basic theme with basic design options
export const createBaseTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#656565",
      },
      text: {
        primary: "#000000",
        secondary: "#656565",
      },
    },
  });
