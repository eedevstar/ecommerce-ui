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
import { Photo } from "./Photo";
import { TPhoto } from "@/types";

export const Photos = () => {

  const photos: TPhoto[] = [
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "/img/photo_of_day.png",
        "alt": "Man"
      },
      "bestseller": false,
      "featured": false,
      "details": null
    },
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "/img/photo_of_day.png",
        "alt": "Man"
      },
      "bestseller": true,
      "featured": false,
      "details": null
    },
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "/img/photo_of_day.png",
        "alt": "Man"
      },
      "bestseller": false,
      "featured": false,
      "details": null
    },
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "/img/photo_of_day.png",
        "alt": "Man"
      },
      "bestseller": false,
      "featured": false,
      "details": null
    },
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "/img/photo_of_day.png",
        "alt": "Man"
      },
      "bestseller": false,
      "featured": false,
      "details": null
    },
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "/img/photo_of_day.png",
        "alt": "Man"
      },
      "bestseller": false,
      "featured": false,
      "details": null
    },
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "/img/photo_of_day.png",
        "alt": "Man"
      },
      "bestseller": false,
      "featured": false,
      "details": null
    },
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "/img/photo_of_day.png",
        "alt": "Man"
      },
      "bestseller": true,
      "featured": false,
      "details": null
    },
  ];

  return (
    <Box>
      <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Box display="flex" gap={1} alignItems={"center"}>
            <Typography variant="h3">Photography /</Typography>
            <Typography variant="h3" color="text.secondary" fontWeight={400}>Premium Photos</Typography>
          </Box>
        </Box>
        <PhotosSort />
      </Box>
      <Grid container mt={6}>
        <PhotosFilter />
        <Grid item sm={9}>
          <Grid container spacing={6}>
            {
              photos.map((item, idx) => (
                <Photo key={idx} photo={item} />
              ))
            }
          </Grid>
          <Box display="flex" justifyContent={"center"} alignItems={"center"} gap={2} mt={13}>
            <ChevronLeftIcon fontSize="large" />
            <Typography variant="h4" color="text.secondary" fontWeight={400}>1</Typography>
            <Typography variant="h4" fontWeight={400}>2</Typography>
            <ChevronRightIcon fontSize="large" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
