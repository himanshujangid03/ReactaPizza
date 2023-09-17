import PizzaList from "../Pizza/PizzaList";
import "./Homepage.css";
import seaFood_Pizza from "../../images/seafood-pizza.jpg";
import { useRef } from "react";

function HomePage(props) {
  const targetRef = useRef(null);
  function scrollToPizza() {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="home-page">
        <div>
          <h1>Your destination for delicious pizza</h1>
          <button className="scrollToPizza-btn" onClick={scrollToPizza}>
            Order now
          </button>
        </div>
        <div className="image-section">
          <img src={seaFood_Pizza} alt="seafood-pizza" />
        </div>
      </div>
      <PizzaList targetRef={targetRef} />
    </>
  );
}

export default HomePage;
