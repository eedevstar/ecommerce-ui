import Image from 'next/image';

type SortByProps = {
  width?: number,
  height?: number,
};

export const SortByIcon = ({
  width,
  height,
}: SortByProps) => {
  return (
    <Image src='/icons/sort-by.svg' alt='Sort By' width={width || 15} height={height || 15} />
  )
}
