import type { NextPage } from "next";
import { Container, Typography, Box, Grid, Button, Divider, ImageList, ImageListItem, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, Card, CardMedia, CardContent } from "@mui/material";
import Default from "@/components/Templates/Default";
import Image from 'next/image';
import { SortByIcon } from "@/components/Icons";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FeaturedPhoto } from "@/components/pages/feature";
import { PhotosSort } from "./PhotosSort";
import { PhotosFilter } from "./PhotosFilter";
import { TPhoto } from "@/types";
import { camelize } from "@/utils";
import { useStore } from "@/stores/root";

type PhotoProps = {
  photo: TPhoto;
};

export const Photo = ({photo}: PhotoProps) => {
  return (
    <>
      <Box width={"100%"} height={398} position="relative" className="photo-box" sx={{"&:hover .add-cart": { display: "block"} }}>
        <Image src={photo.image.src} alt={photo.image.alt} layout="fill" />
        {
          photo.bestseller && (
            <Box position="absolute" left={0} top={0} sx={{backgroundColor:"white", padding: "7px 7px 2px 20px"}}>
              <Typography variant="subtitle1">Best Seller</Typography>
            </Box>
          )
        }
        
        <Box position="absolute" display="none" left={0} bottom={0} right={0} py={1.2} sx={{backgroundColor:"black", cursor: "pointer"}} className="add-cart">
          <Typography variant="h5" align={"center"} color={"white"} fontWeight={500}>ADD TO CART</Typography>
        </Box>
      </Box>
      <Typography variant="h5" color="text.secondary" mt={1}>{camelize(photo.category)}</Typography>
      <Typography variant="h3" sx={{margin: {sm: 0, xs: "12px 0"}}}>{photo.name}</Typography>
      <Typography variant="h5" color="text.secondary" fontWeight={400}>{`$${photo.price}`}</Typography>
    </>
  )
}
