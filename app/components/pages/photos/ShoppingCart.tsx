import * as React from "react";
import { CartIcon, CloseIcon } from "../../Icons";
import { Box, Badge, Divider, Typography, useTheme, alpha, Button } from "@mui/material";
import Image from "next/image";
import { CartContext } from "@/contexts/Cart";
import { PhotosData } from "@/utils/dummyData";

export const ShoppingCart = () => {
  const carts = React.useContext(CartContext);
  const [open, setOpen] = React.useState<boolean>(false);
  const theme = useTheme();

  React.useEffect(() => {
    if(carts.photos.length !== 0) {
      setOpen(true);
      //window.scrollTo();
    }
  }, [carts.photos]);

  const handleClear = () => {
    carts.clearCart();
    setOpen(false);
  }

  const cartsBadge = () => {
    if(carts.photos.length === 0)
      return null;
    else
      return <Typography variant="subtitle1" fontWeight={700}>{carts.photos.length}</Typography>;
  }

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
              {
                photosData().map((photo, idx) => (
                  <Box key={photo.id} display="flex" alignItems={"center"} gap={2}>
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
            <Divider sx={{margin: "24px 0"}} />
            <Button variant="outlined" fullWidth onClick={()=>handleClear()}>CLEAR</Button>
          </Box>
        )
      }
    </>
  )
}
