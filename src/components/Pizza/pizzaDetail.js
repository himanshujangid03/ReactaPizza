import { useRouteLoaderData } from "react-router-dom";

function PizzaDetail() {
  const pizzaData = useRouteLoaderData("pizza-detail");

  return (
    <>
      <div>
        <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
          <img src={pizzaData.photoName} alt={pizzaData.name} />
          <div>
            <h3 key={pizzaData.name}>{pizzaData.name}</h3>
            <p>{pizzaData.ingredients}</p>
            <span>{pizzaData.Rating}</span>
            <span>${pizzaData.soldOut ? "SOLD OUT" : pizzaData.price}</span>
          </div>
        </li>
      </div>
    </>
  );
}

export default PizzaDetail;

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8000/get-pizza/" + id, {
    method: "GET",
  });

  return response;
}
