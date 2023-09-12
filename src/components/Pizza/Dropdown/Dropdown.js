import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.css";
import { API, sortByPriceAPI, sortByRatingAPI } from "../../Context/api";
import AuthContext from "../../Context/auth-context";
//import { useRouteLoaderData } from "react-router";

const Dropdown = () => {
  const [isActive, setIsAcive] = useState(false);
  //const data = useRouteLoaderData("pizza-loader");
  const ctx = useContext(AuthContext);

  const priceHandler = () => {
    ctx.setSortQuery(sortByPriceAPI);
    setIsAcive(false);
  };

  const ratingHandler = () => {
    ctx.setSortQuery(sortByRatingAPI);
    console.log(ctx.sortQuery);
    setIsAcive(false);
  };
  const clearHandler = () => {
    ctx.setSortQuery(API);
    console.log(ctx.sortQuery);
    setIsAcive(false);
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => setIsAcive((el) => !el)}>
          <span>
            <FontAwesomeIcon
              className=" font-awesome-slider"
              icon={faSliders}
              size="lg"
              value={"5"}
            />{" "}
          </span>
          Filter
        </div>
        {isActive && (
          <div className="dropdown-content">
            <div
              className={`dropdown-item ${
                ctx.sortQuery === sortByPriceAPI ? "active-item" : ""
              }`}
              onClick={priceHandler}
            >
              Price
            </div>
            <div
              className={`dropdown-item ${
                ctx.sortQuery === sortByRatingAPI ? "active-item" : ""
              }`}
              onClick={ratingHandler}
            >
              Rating
            </div>
            <div className="dropdown-item" onClick={clearHandler}>
              Clear All
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
