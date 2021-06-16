import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import headerImage from "./../../assets/header-image.jpg";

const Header = (props) => {
  return (
    <>
      <header>
        <div className={styles.header}>
          <span>
            <h1>MyMeals</h1>
          </span>
          <HeaderCartButton onShowCart={props.onShowCart} />
        </div>
      </header>
      <div className={styles.image}>
        <img src={headerImage} alt="header-pic" />
      </div>
    </>
  );
};

export default Header;
