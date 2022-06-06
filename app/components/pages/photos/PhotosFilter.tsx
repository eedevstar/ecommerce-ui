import { Typography, Divider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { useState } from "react";
import { PhotosFilterCategories, PhotosFilterPriceRanges } from "@/utils";

type PhotosFilterProps = {
  filterCategories: (categories: string[])=>void;
  filterRanges: (ranges: string[])=>void;
}

export const PhotosFilter = ({filterCategories, filterRanges}: PhotosFilterProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [ranges, setRanges] = useState<string[]>([]);

  // filter update handler
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
