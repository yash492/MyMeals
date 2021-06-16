import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateInput(enteredValue);
  const hasError = !enteredValueIsValid && isTouched;

  const enteredValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const enteredValueBlurHandler = () => {
    setIsTouched(true);
  };

  return [
    enteredValue,
    enteredValueIsValid,
    hasError,
    enteredValueChangeHandler,
    enteredValueBlurHandler,
  ];
};

export default useInput;
