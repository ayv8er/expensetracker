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

  return (
    <div>
      <div className="backdrop"></div>
      <Card className="modal">
        <header className="header">
          <h2>{modalTitle}</h2>
        </header>
        <div className="content">
          <p>{modalMessage}</p>
        </div>
        <footer className="actions">
          <button onClick={handleClick}>Okay</button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
