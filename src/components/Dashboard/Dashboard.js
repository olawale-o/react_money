import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ token }) => {
  console.log(token);
  return (
    <div>
      Logged in as:
      { token }
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
