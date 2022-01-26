import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ token }) => {
  console.log(token);
  return (
    <div className="Dashboard">
      <a href="/" className="action__item">
        <div className="action__item-card">
          <i className="bx bx-transfer" />
          <h5>Transfer</h5>
        </div>
      </a>
      <a href="/" className="action__item">
        <div className="action__item-card">
          <i className="bx bx-transfer" />
          <h5>Create Account</h5>
        </div>
      </a>
      <a href="/" className="action__item">
        <div className="action__item-card">
          <i className="bx bx-transfer" />
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
          <i clasNames="bx bx-support" />
          <h5>Support</h5>
        </div>
      </a>
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
