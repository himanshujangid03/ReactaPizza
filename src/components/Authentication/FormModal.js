import { Link } from "react-router-dom";
import "./errorAuthModal.css";

function FormModal(props) {
  return (
    <>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <div className="close-modal-btn" onClick={props.onClose}>
            <span class="material-symbols-outlined">close</span>
          </div>
          <h2>Welcome to ReactPizza</h2>
          <p className="break"></p>
          <p>
            Whether you're a new user or returning, we're thrilled to have you
            here! Our platform is designed to provide you with a seamless
            experience.
          </p>
          <h3>Let's Get Started!</h3>
          <div className="form-btn">
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
            <Link to={"/signUp"}>
              <button>SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormModal;
