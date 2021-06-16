import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  // Getting values from cart-context
  const cartCtx = useContext(CartContext);

  const isItemPresent = cartCtx.items.length > 0;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        id={item.id}
        originalPrice={item.originalPrice}
      />
    );
  });

  return (
    <Modal htmlId={"cart-overlay"} onHideElement={props.onHideCart}>
      <div className={styles["cart-card"]}>
        <div className={styles["overflow"]}>{cartItems}</div>
        <div className={styles["total-amount"]}>
          <h3 className={styles["h3-tag"]}>Total Amount</h3>
          <h3 className={styles["h3-tag"]}>{totalAmount}</h3>
        </div>
        <div className={styles["buttons"]}>
          {isItemPresent && (
            <button className={styles["button"]} onClick={props.onShowAddress}>
              Check Out
            </button>
          )}
          <button onClick={props.onHideCart} className={styles["button"]}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
