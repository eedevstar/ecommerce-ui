import Image from 'next/image';

type ChevronLeftProps = {
  width?: number,
  height?: number,
};

export const ChevronLeftIcon = ({
  width,
  height,
}: ChevronLeftProps) => {
  return (
    <Image src='/icons/chevron-left.svg' alt='Sort By' width={width || 13} height={height || 20} />
  )
}
