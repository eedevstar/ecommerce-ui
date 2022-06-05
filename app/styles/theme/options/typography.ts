import { Theme } from "@mui/material";

export const typographyOptions = (theme: Theme) => ({
  h1: {
    lineHeight: theme.custom.lineHeight.small,
    fontSize: "6rem",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.5rem",
      fontWeight: "400",
    },
  },
  h2: {
    lineHeight: theme.custom.lineHeight.small,
    fontSize: "4.5rem",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      fontWeight: "400",
    },
  },
  h3: {
    lineHeight: theme.custom.lineHeight.small,
    fontSize: "4rem",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      fontWeight: "400",
    },
  },
  h4: {
    lineHeight: theme.custom.lineHeight.small,
    fontSize: "3rem",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      fontWeight: "400",
    },
  },
  h5: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "2rem",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      fontWeight: "400",
    },
  },
  h6: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "1.5rem",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  },
  subtitle1: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "1.25rem",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.125rem",
    },
  },
  body1: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "1.25rem",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.125rem",
    },
  },
  body2: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "1.125rem",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  body3: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "1rem",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  button: {
    lineHeight: theme.custom.lineHeight.large,
    fontSize: "1.125rem",
    width: "max-content",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  caption: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "0.75rem",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.625rem",
    },
  },
  inputLabel: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "1rem",
    fontWeight: "300",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  helperText: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "1rem",
    fontWeight: "300",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  inputText: {
    lineHeight: theme.custom.lineHeight.larger,
    fontSize: "1.125rem",
    fontWeight: "300",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
});
