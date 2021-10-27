import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import MyInput from '../shared/MyInput';
import { validationSchema, initialValues } from '../../schema/Schema';

const Register = () => {
  const { registerSchema } = validationSchema;
  const { register } = initialValues;
  return (
    <Formik
      initialValues={register}
      validationSchema={registerSchema}
    >
      {({ isSubmitting, dirty, isValid }) => (
        <div className="authentication">
          <div className="authentication-container">
            <Form className="auth-form">
              <div className="form-header">
                <p>Create account</p>
              </div>
              <MyInput name="firstName" type="text" placeholder="First name" />
              <MyInput name="lastName" type="text" placeholder="Last name" />
              <MyInput name="email" type="email" placeholder="Email" />
              <MyInput name="password" type="password" placeholder="Password" />
              <MyInput name="confirmPassword" type="password" placeholder="Confirm password" />

              <button
                type="submit"
                className="btn btn-secondary"
                disabled={isSubmitting || !(dirty && isValid)}
              >
                Create
              </button>
              <div className="form-footer">
                <p>
                  <span>Already have an account? </span>
                  <Link
                    to={{
                      pathname: '/login',
                      state: { fromRegister: true },
                    }}
                  >
                    Login
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

export default Register;
