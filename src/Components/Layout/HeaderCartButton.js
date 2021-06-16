import CartIcon from "../UI/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfItemsInCart = cartCtx.items.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    },
    0
  );

  return (
    <div className={styles.button} onClick={props.onShowCart}>
      <span className={styles.space}>
        <CartIcon />
      </span>
      <span className={styles.space}>
        <h3 className={styles["cart-visibility"]}>Your Cart</h3>
      </span>
      <div className={styles["amount-of-items"]}>
        <h3 className={styles.center}>{numberOfItemsInCart}</h3>
      </div>
    </div>
  );
};

export default HeaderCartButton;
