import { Typography } from "@mui/material";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useEffect } from "react";
import { chooseTopping, loadToppings, selectTotalPrice } from "../app/saladSlice";
import { ToppingList } from "../components/ToppingList";
import "./Salad.css";
import saladImg from "../assets/salad.jpg";
import { Topping } from "../models/topping.model";

export function Salad() {
  // const name = useSelector((state: RootState) => state.app.name);
  const name = useAppSelector((state) => state.app.name);
  const allToppings = useAppSelector((state) => state.salad.allToppings);
  // const price = useAppSelector((state) => state.salad.price);
  const price = useAppSelector(selectTotalPrice);
  const chosenToppings = useAppSelector((state) => state.salad.chosenToppings);

  const dispatch = useAppDispatch();

  const toppingClick = (topping: Topping) => {
    dispatch(chooseTopping(topping));
  };

  useEffect(() => {
    console.log("effect");
    dispatch(loadToppings());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h4" component="div">
        Welcome {name},
      </Typography>
      <Typography variant="h5" component="div">
        make your order :
      </Typography>

      <div className="content">
        <div className="column">
          <ToppingList toppings={allToppings} onClick={toppingClick} />
        </div>
        <div className="column">
          <img src={saladImg} alt="Salad" className="salad-image" />
          <Typography variant="h5" component="div">
            Your order : {price} €
          </Typography>
          <ul>
            {chosenToppings &&
              chosenToppings.map((topping) => (
                <li>
                  {topping.name} - {topping.price} €
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
