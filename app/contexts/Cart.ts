import React from "react";

export const CartContext = React.createContext({
  photos: [],
  addCart: (val: number) => {},
  clearCart: () => {},
});
