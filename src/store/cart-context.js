import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItems: () => {},
  removeItems: () => {},
  replaceItems: () => {},
});

export default CartContext;
