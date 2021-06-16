import styles from "./OrderSummary.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const OrderSummary = (props) => {
  const { addressDetails } = props;

  const { items, totalAmount } = useContext(CartContext);
  const totalAmountSummary = `$${totalAmount.toFixed(2)}`;

  const { fullName, addressArray, pincode, city } = addressDetails;

  const maxLengthString = (addressDetails) => {
    let max = -Infinity;

    for (let [index, value] of addressDetails.addressArray.entries()) {
      max = Math.max(value.length, max);
      if (index !== addressDetails.addressArray.length - 1) {
        addressDetails.addressArray[index] = value + ",";
      }
    }

    for (let key in addressDetails) {
      if (key === "addressArray") continue;
      max = Math.max(max, String(addressDetails[key]).length);
    }
    return max;
  };

  const maxLength = maxLengthString(addressDetails);
  const address = addressArray.map((address) => {
    const add = address.trim();
    return (
      <h4 key={Math.random()} className={styles["h4"]}>
        {add}
      </h4>
    );
  });

  const addressJSX = (
    <div className={styles["address-details"]}>
      <div className={styles["address-item"]}>
        <p className={styles["margin"]}>Your Name</p>
        <h4 className={styles["h4"]}>{fullName}</h4>
      </div>

      <div className={styles["address-item"]}>
        <p className={styles["margin"]}>Address</p>
        <div className={styles["h4"]}>{address}</div>
      </div>

      <div className={styles["address-item"]}>
        <p className={styles["margin"]}>City</p>
        <h4 className={styles["h4"]}>{city}</h4>
      </div>

      <div className={styles["address-item"]}>
        <p className={styles["margin"]}>Pincode</p>
        <h4 className={styles["h4"]}>{pincode}</h4>
      </div>
    </div>
  );

  const cartItems = items.map((item) => {
    const price = `$${item.price.toFixed(2)}`;
    const amount = `x ${item.amount}`;

    return (
      <li className={styles["cart-item"]} key={item.id}>
        <h3 className={styles["name"]}>{item.name}</h3>
        <div className={styles["price-amount"]}>
          <span className={styles["amount"]}>{amount}</span>
          <span className={styles["price"]}>{price}</span>
        </div>
      </li>
    );
  });

  return (
    <Modal
      htmlId={"order-summary-overlay"}
      modalOverlayClassName={styles["modal"]}
    >
      <Card className={styles["order-summary"]}>
        <h2 className={styles["h2"]}>Review Your Order</h2>
        <div className={styles["overflow"]}>
          <div className={styles["cart-details"]}>{cartItems}</div>
          {addressJSX}
        </div>
        <div className={styles["total-amount"]}>
          <h3 className={styles["h3-tag"]}>Total Amount</h3>
          <h3 className={styles["h3-tag"]}>{totalAmountSummary}</h3>
        </div>
        <Button className={styles.button} name={"Order"} type="submit" />
        <Button
          className={styles.back}
          onClick={props.onHideOrderSummary}
          name={"Back"}
          type="submit"
        />
      </Card>
    </Modal>
  );
};

export default OrderSummary;
