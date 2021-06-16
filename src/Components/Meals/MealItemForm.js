import Input from "../UI/Input";
import Button from "../UI/Button";
import { useRef, useContext } from "react";
import CartContext from "../../store/cart-context";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const onSubmitHander = (event) => {
    event.preventDefault();
    const item = {
      ...props.item,
      amount: +amountInputRef.current.value,
    };

    if (item.amount < 1 || item.amount > 5) return;

    cartCtx.addItems(item);
  };

  return (
    <form onSubmit={onSubmitHander}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: `amount_${props.id}`,
          max: 5,
          min: 1,
          defaultValue: 1,
        }}
      />
      <Button type="submit" name="+Add" />
    </form>
  );
};

export default MealItemForm;
