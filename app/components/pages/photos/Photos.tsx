import { Typography, Box, Grid } from "@mui/material";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";
import { useState } from "react";
import { PhotosSort } from "./PhotosSort";
import { PhotosFilter } from "./PhotosFilter";
import { Photo } from "./Photo";
import { TPhoto } from "@/types";
import { PhotosMobileFilter } from "./PhotosMobileFilter";
import { PhotosData } from "@/utils/dummyData";
import { PhotosFilterPriceRanges } from "@/utils";

export const Photos = () => {
  const pagePhotoCount = 6;
  const [curPage, setCurPage] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [ranges, setRanges] = useState<string[]>([]);
  const [sortType, setSortType] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<number>(2);

  const data = (): TPhoto[] => {
    let arr = PhotosData.filter((photo: TPhoto) => !photo.featured);
    
    if(categories.length > 0)
      arr = arr.filter((photo: TPhoto) => categories.includes(photo.category));

    if(ranges.length > 0) {
      arr = arr.filter((photo: TPhoto) => {
        return ranges.some((index: string) => {
          const range = PhotosFilterPriceRanges[+index];
          return range.min <= photo.price && photo.price <= range.max;
        });
      });
    }

    if(sortType !== "") {
      switch(sortType) {
        case "name":
          arr = arr.sort(function(a, b){
            if(a.name < b.name) { return sortOrder === 0 ? -1 : 1; }
            if(a.name > b.name) { return sortOrder === 0 ? 1 : -1; }
            return 0;
          });
          break;
        case "price":
          arr = arr.sort((a: any, b: any) => sortOrder === 0 ? a.price - b.price : b.price - a.price);
          break;
        default:
          break;
      }
    }

    return arr;
  }

  const photos = (): TPhoto[] => {
    return data().splice(curPage * pagePhotoCount, 6);
  }
  const totalPages = (): number => {
    return Math.ceil(data().length / pagePhotoCount);
  }

  const generatePager = () => {
    return (
      <>
        {
          curPage !== 0 && (
            <Box onClick={()=>setCurPage(curPage - 1)} sx={{cursor: "pointer", lineHeight: "16px"}}>
              <ChevronLeftIcon />
            </Box>
          )
        }
        {
          Array(totalPages()).fill(0).map((item, idx) => (
            <Box key={idx} onClick={()=>setCurPage(idx)} sx={{cursor: "pointer"}}>
              { idx === curPage && (
                <Typography variant="h4" color="text.secondary" fontWeight={400}>{idx + 1}</Typography>
              )}
              { idx !== curPage && (
                <Typography variant="h4" fontWeight={400}>{idx + 1}</Typography>
              )}
            </Box>
          ))
        }
        {
          (curPage !== (totalPages() - 1) && totalPages() > 0) && (
            <Box onClick={()=>setCurPage(curPage + 1)} sx={{cursor: "pointer", lineHeight: "16px"}}>
              <ChevronRightIcon />
            </Box>
          )
        }
        {
          data().length === 0 && (
            <Typography variant="body1" color="text.secondary">No Photo. Filter again.</Typography>
          )
        }
      </>
    )
  }

  const handleFilterCategories = (categories: string[]) => {
    console.log(categories);
    setCategories(categories);
    setCurPage(0);
  }

  const handleFilterRanges = (ranges: string[]) => {
    console.log(ranges);
    setRanges(ranges);
    setCurPage(0);
  }

  const handleSortType = (value: string) => {
    setSortType(value);
  }

  const handleSortOrder = (value: number) => {
    setSortOrder(value);
  }

  return (
    <Box>
      <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
        <Box display={{sm: "flex", xs: "none"}} gap={1} alignItems={"center"}>
          <Typography variant="h3">Photography /</Typography>
          <Typography variant="h3" color="text.secondary" fontWeight={400}>Premium Photos</Typography>
        </Box>
        <Box display={{sm: "block", xs: "none"}}>
          <PhotosSort sortType={handleSortType} sortOrder={handleSortOrder} />
        </Box>

        <Box display={{sm: "none", xs: "flex"}} gap={1} alignItems={"center"}>
          <Typography variant="body1" fontWeight={700}>Photography /</Typography>
          <Typography variant="body1" color="text.secondary">Premium Photos</Typography>
        </Box>
        <Box display={{sm: "none", xs: "flex"}}>
          <PhotosMobileFilter filterCategories={handleFilterCategories} filterRanges={handleFilterRanges} />
        </Box>
      </Box>
      <Grid container mt={6}>
        <Grid item sm={3} xs={12} display={{sm: "block", xs: "none"}}>
          <PhotosFilter filterCategories={handleFilterCategories} filterRanges={handleFilterRanges} />
        </Grid>
        <Grid item sm={9} xs={12}>
          <Grid container spacing={{md: 6, sm: 5, xs: 4}}>
            {
              photos().map((item: TPhoto, idx: number) => (
                <Grid item key={idx} sm={4} xs={12}>
                  <Photo photo={item} />
                </Grid>
              ))
            }
          </Grid>
          <Box display="flex" justifyContent={"center"} alignItems={"center"} gap={2} my={10}>
            {generatePager()}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
