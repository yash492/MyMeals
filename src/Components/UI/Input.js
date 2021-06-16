import styles from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  const classes = `${styles["input"]} ${props.className}`;
  return (
    <div className={classes}>
      <label htmlFor={props.input}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
