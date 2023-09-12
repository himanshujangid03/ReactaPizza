import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import PizzaList, { loader } from "./components/Pizza/PizzaList";
import NewPizza, {
  action as newPizzaAction,
} from "./components/Pizza/NewPizza";
import Error from "./components/pages/Error";
import Cart from "./components/navigation/Cart";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    loader: loader,
    id: "pizza-loader",
    children: [
      { index: true, element: <PizzaList /> },
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
