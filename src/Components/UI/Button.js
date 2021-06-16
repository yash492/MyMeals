import styles from "./Button.module.css";

const Button = (props) => {
  const classes = `${styles.button} ${props.className}`;
  return (
    <button
      type={props.type}
      className={classes}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
