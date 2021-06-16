import styles from "./CartItem.module.css";
import CartPlusMinusButton from "../UI/CartPlusMinusButton";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const amount = `x ${props.amount}`;

  return (
    <>
      <div className={styles["cart-item"]}>
        <div>
          <h3 className={styles["name"]}>{props.name}</h3>
          <div className={styles["price-amount"]}>
            <span className={styles["price"]}>{price}</span>
            <span className={styles["amount"]}>{amount}</span>
          </div>
        </div>
        <CartPlusMinusButton
          item={{
            id: props.id,
            name: props.name,
            amount: 1,
            originalPrice: props.originalPrice,
            price: props.price,
          }}
        />
      </div>
    </>
  );
};

export default CartItem;
