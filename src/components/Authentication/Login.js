import { Form, NavLink, redirect } from "react-router-dom";
import "./form.css";
import { loginAPI } from "../Context/api";

function Login() {
  return (
    <>
      <div className="login-form">
        <Form>
          <p>Login to your Account</p>
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="please enter your email address"
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="please enter your password"
          />
          <button className="submit-btn">Submit</button>
        </Form>
        <p className="login-form-p">
          Don't have an account! <NavLink to={"/signup"}>SignUp</NavLink>
        </p>
      </div>
    </>
  );
}

export default Login;

export async function loginLoader({ request, params }) {
  const data = await request.formData();
  const userData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    passwordConfirm: data.get("passwordConfirm"),
  };

  const response = fetch(loginAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.status === 404) {
    return response;
  }
  return redirect("/");
}
