import { Link } from 'react-router-dom';
import Savings from './Savings';
import './Account.css';

const Account = () => {
  console.log('Account');

  return (
    <div className="account">
      <nav className="account__nav">
        <ul className="account__list">
          <li className="account__item">
            <Link to="/account/savings" className="account__link">
              Savings
            </Link>
          </li>
          <li className="account__item">
            <Link to="/account/savings" className="account__link">
              Current
            </Link>
          </li>
          <li className="account__item">
            <Link to="/account/savings" className="account__link">
              Corporate
            </Link>
          </li>
        </ul>
      </nav>
      <div className="account__container">
        <Savings />
      </div>
    </div>
  );
};

export default Account;
