import React, { useContext } from "react";
import "./pizzaList.css";
import AuthContext from "../Context/auth-context";

const Pizza = (props) => {
  const ctx = useContext(AuthContext);
  const btn_disable = props.pizzaObj.soldOut;

  return (
    <>
      <div>
        <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
          <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
          <div>
            <h3 key={props.pizzaObj.name}>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredients}</p>
            <div className="rating-price">
              <div>
                <span>{props.pizzaObj.Rating}</span>
                <span style={{ fontWeight: "bold" }}>
                  {props.pizzaObj.soldOut
                    ? "SOLD OUT"
                    : `$${props.pizzaObj.price}`}
                </span>
              </div>
              <button
                disabled={btn_disable}
                className={`${btn_disable ? "disable" : ""}`}
                onClick={() => ctx.addToCartHandler(props.pizzaObj)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default Pizza;
