import React, { useContext, useEffect, useState } from "react";
import Pizza from "./Pizza";
import Util from "./Util";
import AuthContext from "../Context/auth-context";

const PizzaList = (props) => {
  //const pizzaData = useRouteLoaderData("pizza-loader");
  const [query, setQuery] = useState("");
  const [pizzaData, setPizzaData] = useState([]);
  const ctx = useContext(AuthContext);

  const fetchPizza = async () => {
    const res = await fetch(ctx.sortQuery);
    const data = await res.json();
    setPizzaData(data);
  };

  useEffect(() => {
    fetchPizza();
  });

  const filteredPizzas = query
    ? pizzaData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : pizzaData;

  const numPizzas = pizzaData.length;

  return (
    <>
      <div className="container">
        {/* <header className="header">
          <h2 className="fast-pizza">Fast React Pizza Co.</h2>
        </header> */}

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

/* export async function loader() {
  const response = await fetch(apiHandler(2), {
    method: "GET",
  });
  return response;
}
 */
