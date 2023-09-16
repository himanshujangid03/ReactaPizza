import "./errorAuthModal.css";

function ErrorAuthModal(props) {
  const message = props.data.message;
  return (
    <>
      <div className={`errorAuthModal ${!props.data ? "isLogin" : ""}`}>
        <p>
          {props.data
            ? message
            : props.loggedInMessage || props.signedUpMessage}
        </p>
      </div>
    </>
  );
}
export default ErrorAuthModal;
