import { Form, NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="login-form">
        <h2>Fast React Pizza Co.</h2>
        <Form>
          <p>Create your new Account</p>
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
          Already have an account! <NavLink to={"/login"}>Login</NavLink>
        </p>
      </div>
    </>
  );
};

export default SignUp;
