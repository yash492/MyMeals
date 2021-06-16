import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price}`;

  const item = {
    name: props.name,
    price: props.price,
    id: props.id,
    originalPrice: props.originalPrice,
  };

  return (
    <li className={styles["meal-item"]}>
      <div className={styles["meal-info"]}>
        <p className={styles["meal-name"]}>{props.name}</p>
        <p className={styles["meal-description"]}>{props.description}</p>
        <p className={styles["meal-price"]}>{price}</p>
      </div>
      <MealItemForm id={props.id} item={item} />
    </li>
  );
};

export default MealItem;
