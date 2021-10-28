import { connect } from 'react-redux';
import {
  useLocation, Link, useHistory, withRouter,
} from 'react-router-dom';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import MyInput from '../shared/MyInput';
import { validationSchema, initialValues } from '../../schema/Schema';
import { authenticate } from '../../redux/auth/auth_async_action';
import { loginRoute } from '../../routes/auth';

const Login = ({ handleRequest }) => {
  const { loginSchema } = validationSchema;
  const { login } = initialValues;
  const location = useLocation();
  const { push } = useHistory();
  console.log(location);

  const auth = async ({ email, password }) => {
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
  return (
    <Formik
      initialValues={login}
      validationSchema={loginSchema}
      onSubmit={auth}
    >
      {({ isSubmitting, dirty, isValid }) => (
        <div className="authentication">
          <div className="authentication-container">
            <Form className="auth-form">
              <div className="form-header">
                <p>Login to your account</p>
              </div>
              <MyInput name="email" type="email" placeholder="Email" />
              <MyInput name="password" type="password" placeholder="Password" />
              <button
                type="submit"
                className="btn btn-secondary"
                disabled={isSubmitting || !(dirty && isValid)}
              >
                Login
              </button>
              <div className="form-footer">
                <p>
                  <span>Dont have an account? </span>
                  <Link
                    to={{
                      pathname: '/register',
                      state: { fromLogin: true },
                    }}
                  >
                    Register
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleRequest: (value, push) => dispatch(authenticate(value, loginRoute, push)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));

Login.propTypes = {
  handleRequest: PropTypes.func.isRequired,
};
