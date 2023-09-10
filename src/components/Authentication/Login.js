import { Form, NavLink } from "react-router-dom";
import "./form.css";

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
