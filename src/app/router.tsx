import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login } from "../pages/Login";
import { Salad } from "../pages/Salad";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "salad/:id",
          element: <Salad />,
        },
      ],
    },
    {
      path: "404",
      element: <div>404 - Page not found</div>,
    },
  ]);