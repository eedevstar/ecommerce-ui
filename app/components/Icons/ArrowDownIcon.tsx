import Image from 'next/image';

type ArrowDownProps = {
  width?: number,
  height?: number,
};

export const ArrowDownIcon = ({
  width,
  height,
}: ArrowDownProps) => {
  return (
    <Image src='/icons/arrow-down.svg' alt='Sort By' width={width || 20} height={height || 13} />
  )
}
