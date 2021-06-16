import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={`${styles["backdrop"]} ${props.className}`}
      onClick={props.onHideElement}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={`${styles["modal"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  const element = document.getElementById(`${props.htmlId}`);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          className={props.backdropClassName}
          onHideElement={props.onHideElement}
        />,
        element
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.modalOverlayClassName}>
          {props.children}
        </ModalOverlay>,
        element
      )}
    </>
  );
};

export default Modal;
