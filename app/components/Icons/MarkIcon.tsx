import Image from 'next/image';

type MarkIconProps = {
  width?: number,
  height?: number,
};

export const MarkIcon = ({
  width,
  height,
}: MarkIconProps) => {
  return (
    <Image src='/icons/mark.svg' alt='Mark' width={width || 159} height={height || 26} />
  )
}
