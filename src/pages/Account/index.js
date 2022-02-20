import { Link, Outlet } from 'react-router-dom';
import './Account.css';

const Account = () => {
  console.log('Account');

  return (
    <div className="account">
      <nav className="account__nav">
        <ul className="account__list">
          <li className="account__item">
            <Link to="savings" className="account__link">
              Savings
            </Link>
            <ul className="dropdown__list">
              <li className="dropdown__item">
                <Link to="savings/personal" className="dropdown__link">
                  Personal
                </Link>
              </li>
              <li className="dropdown__item">
                <Link to="savings/create" className="dropdown__link">
                  Kid
                </Link>
              </li>
              <li className="dropdown__item">
                <Link to="savings/joint" className="dropdown__link">
                  Joint
                </Link>
              </li>
            </ul>
          </li>
          <li className="account__item">
            <Link to="current" className="account__link">
              Current
            </Link>
            <ul className="dropdown__list">
              <li className="dropdown__item">
                <Link to="savings/create" className="dropdown__link">
                  Personal
                </Link>
              </li>
              <li className="dropdown__item">
                <Link to="savings/create" className="dropdown__link">
                  Kid
                </Link>
              </li>
              <li className="dropdown__item">
                <Link to="savings/create" className="dropdown__link">
                  Joint
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="account__container">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
