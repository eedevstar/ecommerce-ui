import Image from 'next/image';

type FilterProps = {
  width?: number,
  height?: number,
};

export const FilterIcon = ({
  width,
  height,
}: FilterProps) => {
  return (
    <Image src='/icons/filter.svg' alt='Sort By' width={width || 29} height={height || 29} />
  )
}
