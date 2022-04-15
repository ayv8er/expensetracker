import ReactDOM from "react-dom";

import Card from "../UI/Card";

import "./ErrorModal.css";

const ErrorModal = (props) => {
  const { setErrorMsg, modalTitle, modalMessage } = props;

  const handleClick = (event) => {
    event.preventDefault();
    setErrorMsg({
      title: false,
      amount: false,
      date: false,
      errorToggle: false,
    });
  };

  const Backdrop = (props) => {
    return <div className="backdrop" onClick={handleClick}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className="modal">
        <header className="header">
          <h2>{modalTitle}</h2>
        </header>
        <div className="content">
          <p>{modalMessage}</p>
        </div>
        <footer className="actions">
          <button type="button" onClick={handleClick}>
            Okay
          </button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={handleClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          modalTitle={modalTitle}
          modalMessage={modalMessage}
          onClick={handleClick}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
