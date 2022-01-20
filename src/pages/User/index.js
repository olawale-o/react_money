import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import AuthSideBar from '../../components/AuthSideBar';
import { loginRoute } from '../../routes/auth';
import { authenticate } from '../../redux/auth/auth_async_action';

const User = ({ handleRequest }) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const navigate = useNavigate();
  const push = (route) => {
    navigate(route, { replace: true });
  };

  const onFocus = () => {
    setIsFocus((isFocus) => !isFocus);
  };

  const login = async ({ email, password }) => {
    const data = {
      endPoint: '/login',
      method: 'POST',
      body: {
        email,
        password,
      },
    };
    await handleRequest(data, push);
  };

  const register = () => {
    console.log('register');
  };

  return (
    <div className="authentication-container">
      <div className={`container ${isFocus ? 'slide' : ''}`}>
        <Login onFocus={onFocus} onLogin={login} isFocus={isFocus} />
        <SignUp onFocus={onFocus} onRegister={register} isFocus={isFocus} />
        <AuthSideBar />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleRequest: (value, push) => dispatch(authenticate(value, loginRoute, push)),
});

export default connect(null, mapDispatchToProps)(User);

User.propTypes = {
  handleRequest: PropTypes.func.isRequired,
};
