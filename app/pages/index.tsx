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
import { Photos } from "@/components/pages/photos";

const Home: NextPage = () => {

  return (
    <Default>
      <FeaturedPhoto />
      <Divider sx={{borderBottomWidth:4, margin: {sm: "65px 0", xs: "49px 0 59px"}}} />
      <Photos />
    </Default>
    
  );
};

export default Home;
