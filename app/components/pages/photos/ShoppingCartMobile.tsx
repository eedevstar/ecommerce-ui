import * as React from "react";
import { CartIcon, CloseIcon } from "../../Icons";
import { Box, Badge, Typography, useTheme, Button } from "@mui/material";
import Image from "next/image";
import { CartContext } from "@/contexts/Cart";
import { PhotosData } from "@/utils/dummyData";


export const ShoppingCartMobile = () => {
  const carts = React.useContext(CartContext);
  const [open, setOpen] = React.useState<boolean>(false);
  const theme = useTheme();

  // cart clear handler
  const handleClear = () => {
    carts.clearCart();
    setOpen(false);
  }

  // generate cart badge element
  const cartsBadge = () => {
    if(carts.photos.length === 0)
      return null;
    else
      return <Typography variant="subtitle1" fontWeight={700}>{carts.photos.length}</Typography>;
  }

  // photos in the cart
  const photosData = () => {
    return PhotosData.filter((photo) => carts.photos.includes(photo.id));
  }

  return (
    <>
      <Badge
        badgeContent={cartsBadge()}
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
              {
                photosData().map((photo, idx) => (
                  <Box key={photo.id} display="flex" alignItems={"center"} gap={2} mb={2}>
                    <Box sx={{flexGrow: 1}}>
                      <Typography variant="subtitle1" fontWeight={700} mb={1} align="left">{photo.name}</Typography>
                      <Typography variant="h4" color="text.secondary"  align="left" fontWeight={400}>{`$${photo.price}`}</Typography>
                    </Box>
                    <Box width={150} height={86} position="relative">
                      <Image src={photo.image.src} alt="Photo of the day" layout="fill" />
                    </Box>
                  </Box>
                ))
              }
              {
                carts.photos.length === 0 && (
                  <Typography variant="body1" color="text.secondary" align="center">No Photo in the cart</Typography>
                )
              }
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
