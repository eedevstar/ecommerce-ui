import { Container, Typography, Box, Grid, Button, Divider, ImageList, ImageListItem, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, Card, CardMedia, CardContent } from "@mui/material";
import Image from 'next/image';
import { RecommendPhotos } from "./RecommendPhotos";

export const FeaturedPhoto = () => {
  return (
    <>
      <Grid container>
        <Grid item sm={8} xs={12}>
          <Typography variant="h3">Samurai King Resting</Typography>
        </Grid>
        <Grid item sm={4} textAlign="right" sx={{display:{sm: "block", xs: "none"}}}>
          <Button variant="contained">ADD TO CART</Button>
        </Grid>
      </Grid>
      <Box width={"100%"} height={{sm: 533, xs: 239}} position="relative" mt={3.5} mb={{sm: 5.5, xs: 0}}>
        <Image src="/img/photo_of_day.png" alt="Photo of the day" layout="fill" />
        <Box position="absolute" left={0} bottom={0} sx={{backgroundColor:"white", padding: "21px 57px 29px"}}>
          <Typography variant="subtitle1" fontWeight={700}>Photo of the day</Typography>
        </Box>
      </Box>
      <Box sx={{display:{sm: "none", xs: "block"}}} my={3.8}>
        <Button variant="contained" sx={{width: "100%"}}>ADD TO CART</Button>
      </Box>
      <Grid container>
        <Grid item md={7} sm={6} xs={12}>
          <Typography variant="h5">About the Samurai King Resting</Typography>
          <Typography variant="h5" color="text.secondary" mt={1.5}>Pets</Typography>
          <Typography variant="body1" color="text.secondary" mt={1.5}>
            So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder 
            <br/><br/>
            text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
          </Typography>
        </Grid>
        <Grid item md={5} sm={6} xs={12}>
          <Box display="flex" flexDirection={"column"} alignItems={"flex-end"}>
            <Typography variant="h5">People also buy</Typography>
            <RecommendPhotos />
            <Typography variant="h5">Details</Typography>
            <Typography variant="body2" color="text.secondary" mt={1.5}>Size: 1020 x 1020 pixel</Typography>
            <Typography variant="body2" color="text.secondary" mt={1.5}>Size: 15 mb</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
