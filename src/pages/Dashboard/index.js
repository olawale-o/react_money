import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Dashboard.css';

const Dashboard = ({ token }) => {
  console.log(token);
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <a href="/" className="action__item">
          <div className="action__item-card">
            <i className="bx bx-transfer" />
            <h5>Transfer</h5>
          </div>
        </a>
        <a href="/" className="action__item">
          <div className="action__item-card">
            <i className="bx bx-money-withdraw" />
            <h5>Create Account</h5>
          </div>
        </a>
        <a href="/" className="action__item">
          <div className="action__item-card">
            <i className="bx bx-data" />
            <h5>Transactions</h5>
          </div>
        </a>
        <a href="/" className="action__item">
          <div className="action__item-card">
            <i className="bx bxs-report" />
            <h5>Report</h5>
          </div>
        </a>
        <a href="/" className="action__item">
          <div className="action__item-card">
            <i className="bx bxl-mastercard" />
            <h5>Card</h5>
          </div>
        </a>
        <a href="/" className="action__item">
          <div className="action__item-card">
            <i className="bx bx-support" />
            <h5>Support</h5>
          </div>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth: { token } }) => (
  { token }
);

export default connect(mapStateToProps, null)(Dashboard);

Dashboard.propTypes = {
  token: PropTypes.string.isRequired,
};
