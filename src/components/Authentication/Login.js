import {
  Form,
  Link,
  NavLink,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";
import "./form.css";
import { loginAPI } from "../Context/api";
import ErrorAuthModal from "./ErrorAuthModal";
import { useState, useEffect } from "react";

function Login(props) {
  const [errModal, setErrModal] = useState(false);
  const data = useActionData();
  const navigate = useNavigate();

  const errorModalHandler = () => {
    if (data) setErrModal(true);
    setTimeout(() => {
      setErrModal(false);
    }, 1000);
  };

  const logOutHandler = () => {
    const proceed = window.confirm("Are you sure!");
    if (proceed) {
      localStorage.removeItem("token");
      navigate("..");
    }
  };
  const token = localStorage.getItem("token");

  const loggedInMessage = "Welcome you are successfully logged in!";

  //useEffect(() => {}, [errModal]);
  return (
    <>
      {token ? (
        <>
          <div className="logOut">
            <h1 className="logOut__h1">Logout Confirmation</h1>
            <p className="logOut__p">
              Are you sure you want to log out of your account? Logging out will
              end your current session and require you to sign in again to
              access your account.
            </p>
            <button className="submit-btn" onClick={logOutHandler}>
              Log Out
            </button>
          </div>
        </>
      ) : (
        <div className="login-form">
          <Link to={"/"}>
            <p className="link-to-home">Back to home page</p>
          </Link>
          {errModal && (
            <ErrorAuthModal data={data} loggedInMessage={loggedInMessage} />
          )}
          <Form method="post" autoComplete="off">
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
            <button className="submit-btn" onClick={errorModalHandler}>
              Submit
            </button>
            <p className="login-form-p">
              Don't have an account! <NavLink to={"/signup"}>SignUp</NavLink>
            </p>
          </Form>
        </div>
      )}
    </>
  );
}

export default Login;

export async function loginAction({ request, params }) {
  const data = await request.formData();
  const userData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(loginAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    return response;
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);

  return redirect("/");
}
