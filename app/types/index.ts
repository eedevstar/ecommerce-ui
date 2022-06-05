export type TImage = {
  src: string;
  alt: string;
};

export type TDimmention = {
  width: number;
  height: number;
};

export type TPhotoDetails = {
  dimmentions: TDimmention;
  size: number;
  description: string;
  recommendations: TImage[];
};

export type TPhoto = {
  name: string;
  category: string;
  price: number;
  currency: string;
  dimmentions?: TDimmention | null;
  image: TImage;
  bestseller: boolean;
  featured: boolean;
  details?: TPhotoDetails | null;
};
