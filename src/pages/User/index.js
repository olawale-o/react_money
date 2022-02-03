import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import AuthSideBar from '../../components/AuthSideBar';
import { loginRoute } from '../../routes/auth';
import { authenticate } from '../../redux/auth/auth_async_action';
import { setError } from '../../redux/global/global';

const User = ({ handleRequest, error, resetError }) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const navigate = useNavigate();
  const push = (route) => {
    navigate(route, { replace: true });
  };

  const onFocus = () => {
    if (error) {
      resetError();
    }
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

  const register = async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) => {
    const data = {
      endPoint: '/register',
      method: 'POST',
      body: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: confirmPassword,
      },
    };
    await handleRequest(data, push);
  };

  return (
    <div className="authentication-container">
      <div className={`container ${isFocus ? 'slide' : ''}`}>
        <Login onFocus={onFocus} onLogin={login} isFocus={isFocus} error={error} />
        <SignUp onFocus={onFocus} onRegister={register} isFocus={isFocus} error={error} />
        <AuthSideBar />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleRequest: (value, push) => dispatch(authenticate(value, loginRoute, push)),
  resetError: () => dispatch(setError(null)),
});

const mapStateToProps = (state) => ({
  error: state.global.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(User);

User.defaultProps = {
  error: null,
};

User.propTypes = {
  handleRequest: PropTypes.func.isRequired,
  error: PropTypes.string,
  resetError: PropTypes.func.isRequired,
};
