import {
  alpha,
  createTheme as createMuiTheme,
  PaletteMode,
} from "@mui/material";
import { createBaseTheme } from "./baseTheme";

const Archivo = "Archivo";
const Bold = 700;
const SemiBold = 600;
const Medium = 500;
const Regular = 400;

export const createTheme = (mode: PaletteMode) => {
  const theme = createBaseTheme(mode);
  return createMuiTheme(theme, {
    palette: {
      ...theme.palette,
      mode,
    },
    breakpoints: {
      values: {
        sm: 640,
        md: 960,
        lg: 1280,
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: Archivo,
          },
          h3: {
            fontWeight: Bold,
            fontSize: 32,
            lineHeight: "35px",
          },
          h4: {
            fontWeight: Bold,
            fontSize: 29,
            lineHeight: "32px",
          },
          h5: {
            fontSize: 22,
            lineHeight: "24px",
            fontWeight: Bold,
          },
          subtitle1: {
            fontSize: 20,
            lineHeight: "22px",
            fontWeight: Regular,
          },
          body1: {
            fontWeight: Regular,
            fontSize: 18,
            lineHeight: "27px",
          },
          body2: {
            fontWeight: Regular,
            fontSize: 16,
            lineHeight: "17px",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            padding: "0 !important",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
      MuiBadge: {
        styleOverrides: {
          badge: {
            borderRadius: 0,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            "& .MuiSelect-select": {
              paddingRight: "18px !important",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "0 !important",
            },
            "& .MuiSvgIcon-root": {
              color: "black !important",
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.main,
            paddingRight: 16,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: Archivo,
            fontWeight: Medium,
            fontSize: "23px",
            lineHeight: "23px",
            padding: "12px 39px",
            letterSpacing: 0.07,
          },
          containedPrimary: {
            backgroundColor: alpha(theme.palette.primary.main, 1),
            borderColor: alpha(theme.palette.primary.main, 1),
            borderRadius: 0,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.main, 1),
              boxShadow: "none",
            },
            "&:disabled": {
              backgroundColor: alpha(theme.palette.secondary.main, 1),
            },
          },
          outlinedPrimary: {
            borderRadius: 0,
            boxShadow: "none",
          },
        },
      },
    },
  });
};
