import { useEffect, useState } from 'react';
import { Form, Link, redirect, useActionData } from 'react-router-dom';
import { postNewPizza } from '../Context/api';
import './pizza-detail.css';

function NewPizza() {
  const [sold, setSold] = useState(false);
  const [errorData, setErrorData] = useState(undefined);
  const token = localStorage.getItem('token');

  const data = useActionData();
  console.log(data);
  function soldOutHandler(e) {
    setSold((el) => !el);
  }
  useEffect(() => {
    setErrorData(data);
    setTimeout(() => {
      setErrorData(null);
    }, 500);
  }, [data]);
  return (
    <>
      <div>
        <h2>{errorData && errorData.message}</h2>
      </div>
      {!token ? (
        <>
          <div className="new-form___admin">
            <h2>
              Login as an <span>Admin</span> to get access
            </h2>
            <Link to={`/login`}>
              <button className="submit-btn">Login</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="new-form">
            <Form method="post">
              <h2>Post a new Pizza</h2>

              <input type="text" placeholder="Choose a name..." name="name" />

              <input
                step="0.1"
                min="0"
                placeholder="set the price..."
                type="number"
                name="price"
              />

              <input
                type="text"
                placeholder="Name the ingredients used..."
                name="ingredients"
              />

              <input
                step="0.1"
                min="1"
                max="5"
                placeholder="set the rating..."
                type="number"
                name="Rating"
              />

              <input
                type="text"
                placeholder="set the image..."
                name="photoName"
              />
              <div className="checkbox-div">
                <label>sold Out</label>
                <input
                  type="checkBox"
                  name="soldOut"
                  value={sold ? sold : 'false'}
                  onChange={soldOutHandler}
                  className="checkbox"
                />
              </div>
              <button className="submit-btn">Add Pizza</button>
            </Form>
          </div>
        </>
      )}
    </>
  );
}

export default NewPizza;

export async function action({ request, params }) {
  const data = await request.formData();
  const newPizzaData = {
    name: data.get('name'),
    ingredients: data.get('ingredients'),
    price: data.get('price'),
    Rating: data.get('Rating'),
    photoName: data.get('photoName'),
    soldOut: data.get('soldOut'),
  };
  const token = localStorage.getItem('token');

  const response = await fetch(postNewPizza, {
    method: 'POST',
    headers: {
      /* prettier-ignore */
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPizzaData),
  });
  if (response.status === 500 || 404 || 401) {
    return response;
  }

  return redirect('/');
}
