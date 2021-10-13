import { useHistory } from 'react-router';
import './error.css';

const Error = ({ message }) => {
  const history = useHistory();
  const onBtnClick = () => {
    history.push('/');
  };

  return (
    <div className="error-container">
      <div className="overlay"></div>
      <div className="error-card">
        <h2>Error</h2>
        <p>{message}</p>
        <button className="error-button" onClick={onBtnClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Error;
