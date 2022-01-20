import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { validationSchema, initialValues } from '../schema/Schema';
import MyInput from './shared/MyInput';

const SignUp = ({ onFocus, onRegister, isFocus }) => {
  const { registerSchema } = validationSchema;
  const { register } = initialValues;
  const onReset = (resetForm) => {
    if (isFocus) {
      resetForm();
    }
    onFocus();
  };
  const auth = () => {
    onRegister();
  };
  return (
    <Formik
      initialValues={register}
      validationSchema={registerSchema}
      onSubmit={auth}
    >
      {({
        isSubmitting,
        dirty,
        isValid,
        handleReset,
      }) => (
        <div className="form-container signup-container">
          <Form>
            <h1>Getting started</h1>
            <div className="tab-container">
              <span>Dont have an account</span>
              <button type="button" className="switch-btn" onClick={() => onReset(handleReset)}>Log in</button>
            </div>
            <MyInput name="firstName" type="text" placeholder="First name" />
            <MyInput name="lastName" type="text" placeholder="Last name" />
            <MyInput name="email" type="email" placeholder="Email" />
            <MyInput name="password" type="password" placeholder="Password" />
            <MyInput name="confirmPassword" type="password" placeholder="Confirm password" />
            <button
              type="submit"
              className="auth-btn"
              disabled={isSubmitting || !(dirty && isValid)}
            >
              SIGN UP
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;

SignUp.propTypes = {
  onFocus: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  isFocus: PropTypes.bool.isRequired,
};
