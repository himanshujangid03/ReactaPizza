import React, { useState } from "react";
import Pizza from "./Pizza";
import Util from "./Util";
import { API, sortByPriceAPI, sortByRatingAPI } from "../Context/api";
import { useRouteLoaderData } from "react-router-dom";

const PizzaList = (props) => {
  const pizzaData = useRouteLoaderData("pizza-loader");
  const [query, setQuery] = useState("");
  //const history = use;

  const filteredPizzas = query
    ? pizzaData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : pizzaData;

  const numPizzas = pizzaData.length;

  return (
    <>
      <div className="container" ref={props.targetRef}>
        <main className="menu">
          <h2>Our menu</h2>

          <Util setQuery={setQuery} />

          {numPizzas > 0 ? (
            <>
              <p>
                Authentic Italian cuisine. {pizzaData.length} creative dishes to
                choose from. All from our stone oven, all organic, all
                delicious.
              </p>

              {
                <ul className="pizzas">
                  {filteredPizzas.map((el) => (
                    <div className="card" key={el._id}>
                      <Pizza pizzaObj={el} />
                    </div>
                  ))}
                </ul>
              }
            </>
          ) : (
            <>
              <p>We're still working on our menu. Please come back later :</p>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default PizzaList;

export async function loader({ request, params }) {
  const searchParams = new URL(request.url).searchParams;
  const sort = searchParams.get("sort");
  console.log(sort);

  let API = "http://localhost:8000/getdata";
  if (sort === "price") {
    API = API + "?sort=price";
  }
  if (sort === "rating") {
    API = API + "?sort=-Rating";
  }

  const response = await fetch(API, {
    method: "GET",
  });
  return response;
}
