import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { CartIcon, MarkIcon, CloseIcon } from "../../Icons";
import { Box, Badge, Container, Divider, Grid, Paper, Typography, useTheme, alpha, Button } from "@mui/material";
import Image from "next/image";

export const ShoppingCart = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const theme = useTheme()

  const handleClear = () => {
    setOpen(false);
  }

  return (
    <>
      <Badge
        badgeContent={<Typography variant="subtitle1" fontWeight={700}>1</Typography>}
        color="primary"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{cursor: "pointer"}}
        onClick={()=>setOpen(true)}
      >
        <Box width={{sm: 54, xs: 32}} height={{sm: 54, xs: 32}}>
          <CartIcon width={"100%"} height={"100%"} />
        </Box>
      </Badge>
      {
        open && (
          <Box position="absolute" top={90} right={-10} width={443} sx={{ border: `4px solid ${alpha(theme.palette.primary.main, 0.12)}`, backgroundColor: 'white', padding: '67px 24px 22px', zIndex: 999}}>
            <Box position="absolute" right={28} top ={22} sx={{cursor: "pointer"}} onClick={()=>setOpen(false)}>
              <CloseIcon />
            </Box>
            <Box display="flex" flexDirection={"column"} gap={1}>
              <Box display="flex" alignItems={"center"} gap={2}>
                <Box sx={{flexGrow: 1}}>
                  <Typography variant="subtitle1" fontWeight={700} mb={1} align="left">Samurai King Resting</Typography>
                  <Typography variant="h4" color="text.secondary"  align="left" fontWeight={400}>#656565</Typography>
                </Box>
                <Box width={150} height={86} position="relative">
                  <Image src="/img/photo_of_day.png" alt="Photo of the day" layout="fill" />
                </Box>
              </Box>
            </Box>
            <Divider sx={{margin: "24px 0"}} />
            <Button variant="outlined" fullWidth onClick={()=>handleClear()}>CLEAR</Button>
          </Box>
        )
      }
    </>
  )
}
