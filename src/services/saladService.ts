import { Topping } from "../models/topping.model";

export function fetchToppings() {
  return new Promise<Topping[]>((resolve) => {
    const toppings: Topping[] = [
      { name: "Pepperoni", price: 1.5 },
      { name: "Sausage", price: 2 },
      { name: "Bacon", price: 2.5 },
      { name: "Olives", price: 0.5 },
      { name: "Cheese", price: 1 },
      { name: "Pineapple", price: 1.5 },
      { name: "Onion", price: 0.5 },
      { name: "Cucumber", price: 0.5 },
    ];
    setTimeout(() => {
      resolve(toppings);
    }, 500);
  });
}
