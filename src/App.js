import "./App.css";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealSummary";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Cart from "./Components/Cart/Cart";
import AddressForm from "./Components/Layout/AddressForm";
import OrderSummary from "./Components/Layout/OrderSummary";
import { useState, useContext, useEffect } from "react";
import CartContext from "./store/cart-context";
import useHttp from "./hooks/use-http";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [addressVisible, setAddressVisible] = useState(false);
  const [orderSummaryVisible, setOrderSummaryVisible] = useState(false);
  const [getAddress, setGetAddress] = useState({});
  const [sendLoading, sendError, sendHttp] = useHttp();
  const [fetchLoading, fetchError, fetchHttp] = useHttp();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const getDataHandler = (data) => {
      cartCtx.replaceItems(data);
    };
    fetchHttp(
      "https://mymangoes-f766d-default-rtdb.firebaseio.com/cart.json",
      getDataHandler
    );
  }, []);

  useEffect(() => {
    sendHttp(
      "https://mymangoes-f766d-default-rtdb.firebaseio.com/cart.json",
      () => {},
      {
        method: "PUT",
        body: {
          items: cartCtx.items,
          totalAmount: cartCtx.totalAmount,
        },
      }
    );
  }, [cartCtx.items, cartCtx.totalAmount, sendHttp]);

  const showCart = () => {
    setCartVisible(true);
    setAddressVisible(false);
  };

  const hideCart = () => {
    setCartVisible(false);
  };

  const showAddress = () => {
    setAddressVisible(true);
    setCartVisible(false);
  };

  const hideAddress = () => {
    setAddressVisible(false);
    setCartVisible(true);
  };

  const hideOrderSummary = () => {
    setOrderSummaryVisible(false);
    setAddressVisible(true);
  };

  const getAddressHandler = (addressDetails) => {
    setGetAddress(addressDetails);
    setOrderSummaryVisible(true);
    setAddressVisible(false);
  };

  return (
    <>
      {addressVisible && (
        <AddressForm
          onGetAddress={getAddressHandler}
          onHideAddress={hideAddress}
        />
      )}
      {orderSummaryVisible && (
        <OrderSummary
          addressDetails={getAddress}
          onHideOrderSummary={hideOrderSummary}
        />
      )}
      {cartVisible && (
        <Cart onHideCart={hideCart} onShowAddress={showAddress} />
      )}
      <Header onShowCart={showCart} />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;
