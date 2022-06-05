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

export const PhotosSort = () => {
  const [sort, setSort] = useState<string>('');
  
  const handleSortChange = (event: any) => {
    console.log(event.target.value);
  }
  return (
    <Box>
      <Box display="flex" alignItems={"center"} justifyContent={"flex-end"} gap={2}>
        <Box display="flex" alignItems={"center"} gap={1}>
          <SortByIcon />
          <Typography variant="h5" color="text.secondary" fontWeight={400}>Sort By</Typography>
        </Box>
        <Box display="flex" alignItems={"center"}>
          <Typography variant="h5" fontWeight={400}>Price</Typography>
          <Select
            value={sort}
            onChange={handleSortChange}
          >
            <MenuItem value={0}>ascending</MenuItem>
            <MenuItem value={1}>descending</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  )
}
