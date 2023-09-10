import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import PizzaList from "./components/Pizza/PizzaList";
import NewPizza, {
  action as newPizzaAction,
} from "./components/Pizza/NewPizza";
import PizzaDetail, {
  loader as pizzaDetailLoader,
} from "./components/Pizza/pizzaDetail";
import Error from "./components/pages/Error";
import Cart from "./components/navigation/Cart";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,

    id: "pizza-loader",
    children: [
      { index: true, element: <PizzaList /> },
      {
        path: "/pizza-detail/:id",
        element: <PizzaDetail />,
        id: "pizza-detail",
        loader: pizzaDetailLoader,
      },
      { path: "/new-pizza", element: <NewPizza />, action: newPizzaAction },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
