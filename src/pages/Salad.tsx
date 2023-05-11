import { Typography } from "@mui/material";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useEffect } from "react";
import { loadToppings } from "../app/saladSlice";

export function Salad() {
  // const name = useSelector((state: RootState) => state.app.name);
  const name = useAppSelector((state) => state.app.name);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("effect")
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
    </>
  );
}
