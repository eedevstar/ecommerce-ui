import { Container, Typography, Box, Grid, Button, Divider, ImageList, ImageListItem, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, Card, CardMedia, CardContent } from "@mui/material";
import Image from 'next/image';

export const RecommendPhotos = () => {
  const recommendItems = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    }
  ];
  return (
    <Box mt={1.5} mb={4.8}>
      <ImageList sx={{ width: 400, height: 150 }} cols={3} rowHeight={147} gap={30}>
        {recommendItems.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=117&h=147&fit=crop&auto=format`}
              srcSet={`${item.img}?w=117&h=147&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
