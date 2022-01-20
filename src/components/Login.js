import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { validationSchema, initialValues } from '../schema/Schema';
import MyInput from './shared/MyInput';

const Login = ({ onFocus, onLogin, isFocus }) => {
  const { loginSchema } = validationSchema;
  const { login } = initialValues;

  const onReset = (resetForm) => {
    if (!isFocus) {
      resetForm();
    }
    onFocus();
  };

  const auth = async ({ email, password }) => {
    await onLogin({ email, password });
  };
  return (
    <Formik
      initialValues={login}
      validationSchema={loginSchema}
      onSubmit={auth}
    >
      {({
        isSubmitting,
        dirty,
        isValid,
        handleReset,
      }) => (
        <div className="form-container login-container">
          <Form>
            <h1>Welcome back</h1>
            <div className="tab-container">
              <span>Dont have an account</span>
              <button type="button" className="switch-btn" onClick={() => onReset(handleReset)}>Sign up</button>
            </div>
            <MyInput type="email" name="email" placeholder="Email" />
            <MyInput name="password" type="password" placeholder="Password" />
            <button
              type="submit"
              className="auth-btn"
              disabled={isSubmitting || !(dirty && isValid)}
            >
              SIGN IN
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Login;

Login.propTypes = {
  onFocus: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  isFocus: PropTypes.bool.isRequired,
};
