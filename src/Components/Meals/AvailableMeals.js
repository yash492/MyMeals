import Card from "../UI/Card";
import MealItem from "./MealItem";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import LoadingIcon from "../UI/LoadingIcon";

const AvailableMeals = () => {
  const [mangoesList, setMangoesList] = useState([]);

  const [loading, error, fetchData] = useHttp();
  useEffect(() => {
    const transformDataIntoArrayForDisplay = (data) => {
      const getMangoesListFromApi = [];
      for (const key in data) {
        getMangoesListFromApi.push(data[key]);
      }
      setMangoesList(getMangoesListFromApi);
    };

    fetchData(
      "https://mymangoes-f766d-default-rtdb.firebaseio.com/availableMealsItem.json",
      transformDataIntoArrayForDisplay
    );
  }, [fetchData]);

  const itemList = mangoesList.map((item) => (
    <MealItem
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      id={item.id}
      originalPrice={item.price}
    />
  ));

  return (
    <>
      {loading && <LoadingIcon />}
      {!loading && !error && <Card>{itemList}</Card>}
      {error && (
        <Card>
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          <p style={{ color: "red", textAlign: "center" }}>
            Refresh the page and Try Again !!!
          </p>
        </Card>
      )}
    </>
  );
};

export default AvailableMeals;
