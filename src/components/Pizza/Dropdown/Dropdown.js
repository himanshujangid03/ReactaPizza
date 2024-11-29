import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.css";
import { API, sortByPriceAPI, sortByRatingAPI } from "../../Context/api";
import AuthContext from "../../Context/auth-context";
import { Link } from "react-router-dom";
//import { useRouteLoaderData } from "react-router";

const Dropdown = () => {
  const [isActive, setIsAcive] = useState(false);
  //const data = useRouteLoaderData("pizza-loader");
  const ctx = useContext(AuthContext);

  const priceHandler = () => {};

  const ratingHandler = () => {};
  const clearHandler = () => {};

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
            <Link to={`?sort=price`}>
              <div
                className={`dropdown-item ${
                  ctx.sortQuery === sortByPriceAPI ? "active-item" : ""
                }`}
                onClick={() => setIsAcive((el) => !el)}
              >
                Price
              </div>
            </Link>
            <Link to={`?sort=rating`}>
              <div
                className={`dropdown-item ${
                  ctx.sortQuery === sortByRatingAPI ? "active-item" : ""
                }`}
                onClick={() => setIsAcive((el) => !el)}
              >
                Rating
              </div>
            </Link>
            <Link to={`/`}>
              <div
                className="dropdown-item"
                onClick={() => setIsAcive((el) => !el)}
              >
                Clear All
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
