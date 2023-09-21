import { useContext, useState } from "react";
import AuthContext from "../Context/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";

const CartItem = (props) => {
  const ctx = useContext(AuthContext);
  const [count, setCount] = useState(1);
  const [animate, setAnimate] = useState(true);

  const priceArray = ctx.cartItem.map((el) => el.price);
  console.log(priceArray);

  if (count < 1) {
    setCount(1);
  }

  const deleteHandler = (id) => {
    const proceed = window.confirm(
      "Are you sure to remove the item from the cart!"
    );
    if (proceed) {
      ctx.setCartItem((pizza) => pizza.filter((el) => el._id !== id));
    }
  };

  return (
    <>
      <li className={`cartPizza ${props.item.soldOut ? "sold-out" : ""}`}>
        <img src={props.item.photoName} alt={props.item.name} />
        <div className="cartPizza__div">
          <h3 key={props.item.name}>{props.item.name}</h3>
          <p>{props.item.ingredients}</p>
          <div className="cart-rating-price">
            <div>
              <span>{props.item.Rating}</span>
              <span>
                {props.item.soldOut ? "SOLD OUT" : `$${props.item.price}`}
              </span>
              <div className="price-increment-btn">
                <span
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <p>{count}</p>
                <span
                  className={`${animate ? "animate" : ""}`}
                  onClick={() => {
                    setCount(count + 1);
                    setAnimate((el) => el);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </div>
            </div>

            <div className="calPrice-cart-btn">
              <p>Price : {props.item.price * count}</p>
              <button onClick={() => deleteHandler(props.item._id)}>
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
