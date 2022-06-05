import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { CartIcon, MarkIcon, CloseIcon } from "../../Icons";
import { Box, Badge, Container, Divider, Grid, Paper, Typography, useTheme, alpha, Button } from "@mui/material";
import Image from "next/image";

export const ShoppingCartMobile = () => {
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
        <CartIcon width={32} height={32} />
      </Badge>
      {
        open && (
          <Box position="fixed" left={0} right={0} top={0} bottom={0} sx={{backgroundColor: "white", zIndex: 999}}>
            <Box position="absolute" left={0} right={0} top={0} bottom={"104px"} sx={{overflowY: "scroll", padding: "19px 36px"}}>
              <Typography variant="h2" mb={4} align="left">Cart</Typography>
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
            <Box position="absolute" bottom={0} left={0} right={0} px={2} py={3} sx={{height: "104px", borderTop: "4px solid #E4E4E4"}}>
              <Button variant="outlined" fullWidth onClick={()=>handleClear()}>CLEAR</Button>
            </Box>
            <Box position="absolute" right={28} top={22} sx={{cursor: "pointer"}} onClick={()=>setOpen(false)}>
              <CloseIcon />
            </Box>
          </Box>
        )
      }
    </>
  )
}
