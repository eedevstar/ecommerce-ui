import { Typography, Box } from "@mui/material";
import Image from 'next/image';
import React from "react";
import { TPhoto } from "@/types";
import { camelize } from "@/utils";
import { CartContext } from "@/contexts/Cart";
import { useMobile } from "@/hooks/responsive";

type PhotoProps = {
  photo: TPhoto;
};

export const Photo = ({photo}: PhotoProps) => {
  const isMobile = useMobile();
  const carts = React.useContext(CartContext);

  const handleAddCart = () => {
    if(!isAlreadyInCart()) {
      carts.addCart(photo.id);
    }
  }

  const isAlreadyInCart = () => {
    return carts.photos.includes(photo.id);
  }

  return (
    <>
      <Box width={"100%"} height={398} position="relative" className="photo-box" sx={{"&:hover .add-cart": { display: "block"}}}>
        <Image src={photo.image.src} alt={photo.image.alt} layout="fill" />
        {
          photo.bestseller && (
            <Box position="absolute" left={0} top={0} sx={{backgroundColor:"white", padding: "7px 7px 2px 20px"}}>
              <Typography variant="subtitle1">Best Seller</Typography>
            </Box>
          )
        }
        
        <Box position="absolute" 
          display={isMobile ? "block" : "none"} 
          left={0} 
          bottom={0} 
          right={0}
          py={1.2} 
          sx={{backgroundColor:"black", cursor: "pointer"}} 
          className="add-cart"
          onClick={() => handleAddCart()}
        >
          <Typography variant="h5" align={"center"} color={"white"} fontWeight={500}>
            {isAlreadyInCart() ? "ADDED" : "ADD TO CART"}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" color="text.secondary" mt={1}>{camelize(photo.category)}</Typography>
      <Typography variant="h3" sx={{margin: {sm: 0, xs: "12px 0"}}}>{photo.name}</Typography>
      <Typography variant="h5" color="text.secondary" fontWeight={400}>{`$${photo.price}`}</Typography>
    </>
  )
}
