import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from "./AddressForm.module.css";
import useInput from "../../hooks/use-input";

const isPincodeCorrect = (value) => {
  if (value.startsWith("0")) return false;
  else if (value.trim().length !== 6) return false;
  else return !isNaN(value);
};

const isInputNotEmpty = (value) => value.trim() !== "";

const AddressForm = (props) => {
  const [
    enteredFullName,
    enteredFullNameIsValid,
    enteredFullNameHasError,
    enteredFullNameChangeHandler,
    enteredFullNameBlurHandler,
  ] = useInput(isInputNotEmpty);
  const [
    enteredAddress,
    enteredAddressIsValid,
    enteredAddressHasError,
    enteredAddressChangeHandler,
    enteredAddressBlurHandler,
  ] = useInput(isInputNotEmpty);
  const [
    enteredPincode,
    enteredPincodeIsValid,
    enteredPincodeHasError,
    enteredPincodeChangeHandler,
    enteredPincodeBlurHandler,
  ] = useInput(isPincodeCorrect);
  const [
    enteredCity,
    enteredCityIsValid,
    enteredCityHasError,
    enteredCityChangeHandler,
    enteredCityBlurHandler,
  ] = useInput(isInputNotEmpty);

  let formIsValid = false;
  if (
    enteredFullNameIsValid &&
    enteredAddressIsValid &&
    enteredPincodeIsValid &&
    enteredCityIsValid
  )
    formIsValid = true;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const addressArray = enteredAddress.split(",");

    const addressDetails = {
      addressArray,
      fullName: enteredFullName,
      pincode: enteredPincode,
      city: enteredCity,
    };

    props.onGetAddress(addressDetails);
  };

  return (
    <Modal
      htmlId={"address-overlay"}
      modalOverlayClassName={styles.modal}
      onHideElement={props.onHideAddress}
    >
      <Card className={styles.form}>
        <form className={styles.container} onSubmit={formSubmitHandler}>
          <h2 className={styles.h2}>Enter your address </h2>
          <Input
            className={styles["input"]}
            label="Your Name"
            input={{
              type: "text",
              id: `name`,
              onChange: enteredFullNameChangeHandler,
              onBlur: enteredFullNameBlurHandler,
            }}
          />

          {enteredFullNameHasError && (
            <p className={styles["error-message"]}>
              Your Name cannot be empty!
            </p>
          )}

          <Input
            className={styles["input"]}
            label="Address"
            input={{
              type: "text",
              id: `address`,
              onChange: enteredAddressChangeHandler,
              onBlur: enteredAddressBlurHandler,
            }}
          />
          {enteredAddressHasError && (
            <p className={styles["error-message"]}>
              Your Address cannot be empty!
            </p>
          )}
          <Input
            className={styles["input"]}
            label="Pin Code"
            input={{
              type: "text",
              id: `pincode`,
              onChange: enteredPincodeChangeHandler,
              onBlur: enteredPincodeBlurHandler,
              maxLength: 6,
            }}
          />
          {enteredPincodeHasError && (
            <p className={styles["error-message"]}>
              Your Pincode cannot start with 0 and/or it has to contain exactly
              six characters
            </p>
          )}
          <Input
            className={styles["input"]}
            label="City"
            input={{
              type: "text",
              id: `city`,
              onChange: enteredCityChangeHandler,
              onBlur: enteredCityBlurHandler,
            }}
          />
          {enteredCityHasError && (
            <p className={styles["error-message"]}>
              Your City cannot be empty!
            </p>
          )}
          <Button
            className={styles.button}
            disabled={!formIsValid}
            // onClick={props.onShowOrderSummary}
            name={"Continue"}
            type="submit"
          />
          <Button
            className={styles.back}
            onClick={props.onHideAddress}
            name={"Back"}
            type="submit"
          />
        </form>
      </Card>
    </Modal>
  );
};

export default AddressForm;
