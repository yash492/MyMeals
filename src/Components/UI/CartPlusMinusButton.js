import styles from "./CartPlusMinusButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartPlusMinusButton = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemFn = cartCtx.addItems.bind(cartCtx, props.item);
  const removeItemFn = cartCtx.removeItems.bind(cartCtx, props.item.id);

  return (
    <div className={styles["plus-minus-button"]}>
      <button className={styles["button"]} onClick={addItemFn}>
        +
      </button>
      <button className={styles["button"]} onClick={removeItemFn}>
        -
      </button>
    </div>
  );
};

export default CartPlusMinusButton;
