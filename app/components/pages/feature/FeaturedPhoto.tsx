import { TPhoto } from "@/types";
import { camelize, humanFileSize } from "@/utils";
import { PhotosData } from "@/utils/dummyData";
import { Typography, Box, Grid, Button } from "@mui/material";
import Image from 'next/image';
import { RecommendPhotos } from "./RecommendPhotos";
import { CartContext } from "@/contexts/Cart";
import React from "react";

export const FeaturedPhoto = () => {
  const carts = React.useContext(CartContext);
  const photo: TPhoto | undefined = PhotosData.find((photo: TPhoto) => photo.featured);

  if(typeof photo === undefined)
    return <></>;
  
  // checking featured photo in the cart
  const handleAddCart = () => {
    if(!isAlreadyInCart())
      carts.addCart(photo.id);
  }

  const isAlreadyInCart = () => {
    return carts.photos.includes(photo.id);
  }

  return (
    <>
      <Grid container>
        <Grid item sm={8} xs={12}>
          <Typography variant="h3">{photo?.name}</Typography>
        </Grid>
        <Grid item sm={4} textAlign="right" sx={{display:{sm: "block", xs: "none"}}}>
          <Button variant="contained" onClick={()=>handleAddCart()}>{isAlreadyInCart() ? "ADDED" : "ADD TO CART"}</Button>
        </Grid>
      </Grid>
      <Box width={"100%"} height={{sm: 533, xs: 239}} position="relative" mt={3.5} mb={{sm: 5.5, xs: 0}}>
        <Image src={photo?.image?.src} alt="Photo of the day" layout="fill" />
        <Box position="absolute" left={0} bottom={0} sx={{backgroundColor:"white", padding: "21px 57px 29px"}}>
          <Typography variant="subtitle1" fontWeight={700}>Photo of the day</Typography>
        </Box>
      </Box>
      <Box sx={{display:{sm: "none", xs: "block"}}} my={3.8}>
        <Button variant="contained" fullWidth onClick={()=>handleAddCart()}>{isAlreadyInCart() ? "ADDED" : "ADD TO CART"}</Button>
      </Box>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Typography variant="h5">{`About the ${photo?.name}`}</Typography>
          <Typography variant="h5" color="text.secondary" mt={1.5}>{camelize(photo?.category)}</Typography>
          <Typography variant="body1" color="text.secondary" mt={1.5}>{photo?.details?.description}</Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box display="flex" flexDirection={"column"} alignItems={{sm: "flex-end", xs: "flex-start"}}>
            <Typography variant="h5" mb={3.6} mt={{sm: 0, xs: 3.6}}>People also buy</Typography>
            <RecommendPhotos photos={photo?.details?.recommendations} />
            <Typography variant="h5">Details</Typography>
            <Typography variant="body2" color="text.secondary" mt={1.5}>{`Size: ${photo?.details?.dimmentions?.width} x ${photo?.details?.dimmentions?.height} pixel`}</Typography>
            <Typography variant="body2" color="text.secondary" mt={1.5}>{`Size: ${humanFileSize(photo?.details?.size)}`}</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
