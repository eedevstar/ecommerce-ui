import { TImage } from "@/types";
import { Box } from "@mui/material";
import Image from 'next/image';

type RecommendPhotosProps = {
  photos: TImage[]
}

export const RecommendPhotos = ({photos}: RecommendPhotosProps) => {
  return (
    <Box mt={1.5} mb={4.8} display="flex" justifyContent={"space-between"} gap={{md: 4, sm: 2, xs: 1}} >
      {photos.map((item: TImage, idx: number) => (
        <Box key={idx} width={{sm: "117px", xs: "30vw"}} height={147} position="relative">
          <Image src={item.src} alt={item.alt} layout="fill" />
        </Box>
      ))}
    </Box>
  )
}
