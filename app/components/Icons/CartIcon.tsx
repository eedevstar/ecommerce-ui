import Image from 'next/image';

type CartIconProps = {
  width?: number | string,
  height?: number | string,
};

export const CartIcon = ({
  width,
  height,
}: CartIconProps) => {
  return (
    <Image src='/icons/shopping-cart.svg' alt='Cart' width={width || 54} height={height || 54} />
  )
}
