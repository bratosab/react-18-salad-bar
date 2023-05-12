import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Topping } from "../models/topping.model";

// First way
// interface IPropToppingList {
//   toppings: Topping[];
// }
// export function ToppingList({ toppings }: IPropToppingList) {

export function ToppingList({
  toppings,
  onClick,
}: {
  toppings: Topping[];
  onClick: (topping: Topping) => void;
}) {
  return (
    <>
      <List>
        {toppings &&
          toppings.map((topping) => (
            <ListItem
              disablePadding
              key={topping.name}
              onClick={() => onClick(topping)}
            >
              <ListItemButton>
                <ListItemText
                  primary={topping.name}
                  secondary={`${topping.price} €`}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </>
  );
}
