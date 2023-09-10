import { useContext } from "react";
import AuthContext from "../Context/auth-context";
import CartItem from "./CartItem";
import "./cart.css";

function Cart(props) {
  const ctx = useContext(AuthContext);

  return (
    <>
      <h1 className="shopping-cart">Shopping Cart</h1>
      <div className="item-length">
        <p>{ctx.cartItem.length} pizzas in cart</p>

        <hr />
      </div>
      <ul className="cartPizzas">
        {ctx.cartItem.map((el) => (
          <div className="card" key={el.name}>
            <CartItem item={el} />
          </div>
        ))}
      </ul>
    </>
  );
}

export default Cart;
