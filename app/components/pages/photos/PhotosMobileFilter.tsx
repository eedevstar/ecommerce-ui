import { Typography, Box, Grid, Button, Divider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { CloseIcon, FilterIcon, SortByIcon } from "@/components/Icons";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { useState } from "react";
import { PhotosFilterCategories, PhotosFilterPriceRanges } from "@/utils";

type PhotosMobileFilterProps = {
  filterCategories: (categories: string[])=>void;
  filterRanges: (ranges: string[])=>void;
}

export const PhotosMobileFilter = ({filterCategories, filterRanges}: PhotosMobileFilterProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [ticks, setTicks] = useState({});
  const [savedTicks, setSavedTicks] = useState({});

  const handleChange = (key: string, value: boolean) => {
    const val = {...ticks, [key]: value};
    setTicks(val);
  }

  // clear filters
  const handleClear = () => {
    setTicks({});
  }

  // save filter handler
  const handleSave = () => {
    setSavedTicks({...ticks});
    setOpen(false);
    console.log(ticks);
    let categories = [];
    let ranges = [];

    for(let key in ticks) {
      if (ticks.hasOwnProperty(key) && ticks[key] === true) {
        const range_val = parseInt(key);
        if(isNaN(range_val)) {
          categories.push(key);
        } else {
          ranges.push(key);
        }
      }
    }

    filterCategories(categories);
    filterRanges(ranges);
  }

  // close filter panel
  const handleClose = () => {
    setTicks({});
    setOpen(false);
  }

  const handleOpenMobileFilter = () => {
    setTicks({...savedTicks});
    setOpen(true);
  }

  return (
    <>
      <Box onClick={()=>handleOpenMobileFilter()}>
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
                      control={<Checkbox checked={ticks[item.value] ?? false} onChange={(e) => handleChange(item.value, e.target.checked)} style={{transform: "scale(1.5)"}} 
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
                      control={<Checkbox checked={ticks[item.value] ?? false} onChange={(e) => handleChange(item.value, e.target.checked)} style={{transform: "scale(1.5)"}} 
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
                  <Button variant="contained" fullWidth onClick={()=>handleSave()}>SAVE</Button>
                </Grid>
              </Grid>
            </Box>
            <Box position="absolute" right={28} top ={22} sx={{cursor: "pointer"}} onClick={()=>handleClose()}>
              <CloseIcon />
            </Box>
          </Box>
        )
      }
      
    </>
  )
}
