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

type PhotosSortProps = {
  sortType: (val: string) => void;
  sortOrder: (val: number) => void;
}

export const PhotosSort = ({sortType, sortOrder}: PhotosSortProps) => {
  const [open, setOpen] = useState(false);
  const [priceSort, setPriceSort] = useState<number>(2);
  const [sort, setSort] = useState<number>(2);
  const [type, setType] = useState<string>("");
  
  const handleSortChange = (value: number) => {
    setType("price");
    setSort(value);

    sortType("price");
    sortOrder(value);
  }

  const handleNameSort = () => {
    const val: number = sort === 0 ? 1: 0;
    setType("name");
    setSort(val);

    sortType("name");
    sortOrder(val);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Box display="flex" alignItems={"center"} justifyContent={"flex-end"} gap={2}>
        <Box display="flex" alignItems={"center"} gap={1} onClick={()=>handleNameSort()} sx={{cursor: "pointer"}}>
          <SortByIcon />
          <Typography variant="h5" color="text.secondary" fontWeight={400}>Sort By</Typography>
        </Box>
        <Box display="flex" alignItems={"center"}>
          <Box sx={{cursor: "pointer"}} onClick={()=>handleOpen()}>
            <Typography variant="h5" fontWeight={400}>Price</Typography>
          </Box>
          <Select
            value={priceSort}
            onChange={(e)=>handleSortChange(+e.target.value)}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
          >
            <MenuItem value={0}>ascending</MenuItem>
            <MenuItem value={1}>descending</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  )
}
