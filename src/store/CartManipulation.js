import CartContext from "./cart-context.js";
import { useReducer } from "react";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // Let's deal with Total Amount
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.originalPrice;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems = [];

    if (existingItemIndex === -1)
      updatedItems = state.items.concat(action.item);
    else {
      const getExistingItem = state.items[existingItemIndex];
      const updatedAmount = getExistingItem.amount + action.item.amount;
      const getUpdatedPrice = getExistingItem.originalPrice * updatedAmount;

      if (updatedAmount > 5) {
        alert("You have chosen the maximum limit of 5 items.");
        return { ...state };
      }
      const updatedItem = {
        ...getExistingItem,
        amount: updatedAmount,
        price: getUpdatedPrice,
      };

      updatedItems = [...state.items];

      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const getExistingItem = state.items[existingItemIndex];
    const updatedPrice =
      getExistingItem.originalPrice * (getExistingItem.amount - 1);

    const updatedTotalAmount =
      state.totalAmount - getExistingItem.originalPrice;

    let updatedItems = [];

    if (getExistingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...getExistingItem,
        amount: getExistingItem.amount - 1,
        price: updatedPrice,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      totalAmount: Math.abs(updatedTotalAmount),
      items: updatedItems,
    };
  } else if (action.type === "REPLACE") {
    return {
      totalAmount: action.payload.totalAmount ?? 0,
      items: !action.payload.items ? [] : [...action.payload.items],
    };
  } else {
    return {
      items: [],
      totalAmount: 0,
    };
  }
};

const CartManipulation = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addMealItemsHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeMealItemsHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  const replaceMealItemsHandler = (payload) => {
    dispatchCart({ type: "REPLACE", payload });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addMealItemsHandler,
        removeItems: removeMealItemsHandler,
        replaceItems: replaceMealItemsHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartManipulation;
