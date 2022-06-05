import Image from 'next/image';

type ChevronRightProps = {
  width?: number,
  height?: number,
};

export const ChevronRightIcon = ({
  width,
  height,
}: ChevronRightProps) => {
  return (
    <Image src='/icons/chevron-right.svg' alt='Sort By' width={width || 13} height={height || 20} />
  )
}
