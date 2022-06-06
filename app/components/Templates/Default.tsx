import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { MarkIcon } from "../Icons";
import { Box, Container, Divider, Grid } from "@mui/material";
import { ShoppingCart } from "../pages/photos/ShoppingCart";
import { ShoppingCartMobile } from "../pages/photos/ShoppingCartMobile";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const height_sm = 124;
const height_xs = 94;

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="static"
      >
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container alignItems="center" height={{sm: height_sm, xs: height_xs}}>
              <Grid item xs={8} pl={{xs: 4, sm: 0}}>
                <Box pt={2}>
                  <MarkIcon />
                </Box>
              </Grid>
              <Grid item xs={4} textAlign="right" sx={{position: "relative"}} pr={{xs: 3, sm: 0}}>
                <Box display={{sm: "block", xs: "none"}}>
                  <ShoppingCart />
                </Box>
                <Box display={{sm: "none", xs: "block"}}>
                  <ShoppingCartMobile />
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{borderBottomWidth:4}} />
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box pt={{sm: "62px", xs: "32px"}} px={{sm: 0, xs: "14px"}} pb={5}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default DefaultLayout;
