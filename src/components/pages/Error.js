import NavBar from "../navigation/NavBar";
import "./error.css";

function Error() {
  return (
    <>
      <NavBar />
      <div className="error__div">
        <h3>404 Something went wrong!</h3>
        <p>Failed to load pizzas</p>
      </div>
    </>
  );
}

export default Error;
