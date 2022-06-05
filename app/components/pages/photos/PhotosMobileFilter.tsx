import type { NextPage } from "next";
import { Container, Typography, Box, Grid, Button, Divider, ImageList, ImageListItem, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, Card, CardMedia, CardContent } from "@mui/material";
import Default from "@/components/Templates/Default";
import Image from 'next/image';
import { CloseIcon, FilterIcon, SortByIcon } from "@/components/Icons";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { useEffect, useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FeaturedPhoto } from "@/components/pages/feature";
import { PhotosSort } from "./PhotosSort";
import { PhotosFilter } from "./PhotosFilter";
import { Photo } from "./Photo";
import { TPhoto } from "@/types";
import { PhotosFilterCategories, PhotosFilterPriceRanges } from "@/utils";

export const PhotosMobileFilter = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [ticks, setTicks] = useState({});
  // const [ticks, setTicks] = useState(()=> {
  //   let result = {};
  //   PhotosFilterCategories.forEach((item) => {
  //     result = {...result, [item.value]: false};
  //   });
  //   PhotosFilterPriceRanges.forEach((item) => {
  //     result = {...result, [item.value]: false};
  //   });
  //   return result;
  // });

  const handleChange = (key: string, value: boolean) => {
    setTicks({...ticks, [key]: value});
  }

  const handleClear = () => {
    setTicks({});
    setOpen(false);
  }

  return (
    <>
      <Box onClick={()=>setOpen(true)}>
        <FilterIcon />
      </Box>
      {
        open && (
          <Box position="fixed" left={0} right={0} top={0} bottom={0} sx={{backgroundColor: "white", zIndex: 999}}>
            <Box position="absolute" left={0} right={0} top={0} bottom={"104px"} sx={{overflowY: "scroll", padding: "19px 36px"}}>
              <Typography variant="h2" mb={4}>Filter</Typography>
              <FormGroup>
                {
                  PhotosFilterCategories.map((item, idx) => (
                    <FormControlLabel 
                      key={idx} 
                      control={<Checkbox checked={ticks[item.value as string]} onChange={(e) => handleChange(item.value, e.target.checked)} style={{transform: "scale(1.5)"}} 
                      checkedIcon={<CheckBoxOutlinedIcon />} />} 
                      sx={{marginBottom: "32px"}} 
                      label={<Typography variant="h4" fontWeight={400}>
                      {item.label}
                    </Typography>} />
                  ))
                }
              </FormGroup>
              <Divider />
              <Typography variant="h2" my={4}>Price range</Typography>
              <FormGroup>
                {
                  PhotosFilterPriceRanges.map((item, idx) => (
                    <FormControlLabel 
                      key={idx} 
                      control={<Checkbox style={{transform: "scale(1.5)"}} 
                      checkedIcon={<CheckBoxOutlinedIcon />} />} 
                      sx={{marginBottom: "32px"}} 
                      label={<Typography variant="h4" fontWeight={400}>
                      {item.label}
                    </Typography>} />
                  ))
                }
              </FormGroup>
            </Box>
            <Box position="absolute" bottom={0} left={0} right={0} px={2} py={3} sx={{height: "104px", borderTop: "4px solid #E4E4E4"}}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button variant="outlined" fullWidth onClick={()=>handleClear()}>CLEAR</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth>SAVE</Button>
                </Grid>
              </Grid>
            </Box>
            <Box position="absolute" right={28} top ={22} sx={{cursor: "pointer"}} onClick={()=>setOpen(false)}>
              <CloseIcon />
            </Box>
          </Box>
        )
      }
      
    </>
  )
}
