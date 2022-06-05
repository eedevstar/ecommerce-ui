import Image from 'next/image';

type CloseIconProps = {
  width?: number,
  height?: number,
};

export const CloseIcon = ({
  width,
  height,
}: CloseIconProps) => {
  return (
    <Image src='/icons/close.svg' alt='Close' width={width || 22} height={height || 22} />
  )
}
