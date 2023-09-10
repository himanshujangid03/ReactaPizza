import { useState } from "react";
import { Form, json, redirect } from "react-router-dom";
import { postNewPizza } from "../Context/api";
import "./pizza-detail.css";

function NewPizza() {
  const [sold, setSold] = useState(false);
  function soldOutHandler(e) {
    setSold((el) => !el);
  }
  return (
    <>
      <div className="new-form">
        <Form method="post">
          <h2>Post a new Pizza</h2>
          <label>Name</label>
          <input
            type="text"
            required
            placeholder="Choose a name..."
            name="name"
          />
          <label>Ingredients</label>
          <input
            type="text"
            placeholder="Name the ingredients used..."
            name="ingredients"
            required
          />
          <label>price</label>
          <input
            step="0.1"
            min="0"
            placeholder="set the price..."
            type="number"
            name="price"
            required
          />
          <label>Rating</label>
          <input
            step="0.1"
            min="1"
            max="5"
            placeholder="set the rating..."
            type="number"
            name="Rating"
            required
          />
          <label>Image</label>
          <input
            type="text"
            placeholder="set the image..."
            name="photoName"
            required
          />
          <div className="checkbox-div">
            <label>sold Out</label>
            <input
              type="checkBox"
              name="soldOut"
              value={sold ? sold : "false"}
              onChange={soldOutHandler}
              className="checkbox"
            />
          </div>
          <button className="submit-btn">Add Pizza</button>
        </Form>
      </div>
    </>
  );
}

export default NewPizza;

export async function action({ request, params }) {
  const data = await request.formData();
  const newPizzaData = {
    name: data.get("name"),
    ingredients: data.get("ingredients"),
    price: data.get("price"),
    Rating: data.get("Rating"),
    photoName: data.get("photoName"),
    soldOut: data.get("soldOut"),
  };

  const response = await fetch(postNewPizza, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPizzaData),
  });

  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    console.log("Could not post pizzas");
    json({ message: "Could not post events" });
  }
  return redirect("/");
}
