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
import { PhotosFilterCategories, PhotosFilterPriceRanges } from "@/utils";

type PhotosFilterProps = {
  filterCategories: (categories: string[])=>void;
  filterRanges: (ranges: string[])=>void;
}

export const PhotosFilter = ({filterCategories, filterRanges}: PhotosFilterProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [ranges, setRanges] = useState<string[]>([]);

  const handleFilterChange = (isCategory: boolean, key: string, value: boolean) => {
    let arr: string[] = isCategory ? [...categories] : [...ranges];
    
    if(value && !arr.includes(key)) {
      arr.push(key);
    } else if(!value && arr.includes(key)) {
      arr.splice(arr.findIndex((item) => item == key), 1);
    }

    if(isCategory) {
      setCategories(arr);
      filterCategories(arr);
    } else {
      setRanges(arr);
      filterRanges(arr);
    }
  }

  return (
    <>
      <Typography variant="h5" mb={4}>Category</Typography>
      <FormGroup>
        {
          PhotosFilterCategories.map((item, idx) => (
            <FormControlLabel 
              key={idx} 
              control={<Checkbox onChange={(e)=>handleFilterChange(true, item.value, e.target.checked)} 
              checkedIcon={<CheckBoxOutlinedIcon />} />} 
              sx={{marginBottom: "23px"}} 
              label={item.label} />
          ))
        }
      </FormGroup>
      <Divider />
      <Typography variant="h5" my={4}>Price range</Typography>
      <FormGroup>
        {
          PhotosFilterPriceRanges.map((item, idx) => (
            <FormControlLabel 
              key={idx} 
              control={<Checkbox onChange={(e)=>handleFilterChange(false, item.value, e.target.checked)} 
              checkedIcon={<CheckBoxOutlinedIcon />} />} 
              sx={{marginBottom: "23px"}} 
              label={item.label} />
          ))
        }
      </FormGroup>
    </>
  )
}
