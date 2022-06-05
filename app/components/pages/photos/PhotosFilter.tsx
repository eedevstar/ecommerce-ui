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

export const PhotosFilter = () => {
  const filterCategories = [
    {
      value: "people",
      label: "People",
    },
    {
      value: "premium",
      label: "Premium",
    },
    {
      value: "pets",
      label: "Pets",
    },
    {
      value: "food",
      label: "Food",
    },
    {
      value: "landmarks",
      label: "Landmarks",
    },
    {
      value: "cities",
      label: "Cities",
    },
    {
      value: "nature",
      label: "Nature",
    },
  ];

  const filterPriceRanges = [
    {
      value: "0",
      label: "Lower than $20",
    },
    {
      value: "1",
      label: "$20 - $100",
    },
    {
      value: "2",
      label: "$100 - $200",
    },
    {
      value: "3",
      label: "More than $200",
    },
  ]
  return (
    <Grid item sm={3}>
      <Typography variant="h5" mb={4}>Category</Typography>
      <FormGroup>
        {
          filterCategories.map((item, idx) => (
            <FormControlLabel key={idx} control={<Checkbox checkedIcon={<CheckBoxOutlinedIcon />} />} sx={{marginBottom: "23px"}} label={item.label} />
          ))
        }
      </FormGroup>
      <Divider />
      <Typography variant="h5" my={4}>Price range</Typography>
      <FormGroup>
        {
          filterPriceRanges.map((item, idx) => (
            <FormControlLabel key={idx} control={<Checkbox checkedIcon={<CheckBoxOutlinedIcon />} />} sx={{marginBottom: "23px"}} label={item.label} />
          ))
        }
      </FormGroup>
    </Grid>
  )
}
