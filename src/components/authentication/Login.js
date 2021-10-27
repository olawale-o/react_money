import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import MyInput from '../shared/MyInput';
import { validationSchema, initialValues } from '../../schema/Schema';

const Login = () => {
  const { loginSchema } = validationSchema;
  const { login } = initialValues;
  const location = useLocation();
  console.log(location);
  return (
    <Formik
      initialValues={login}
      validationSchema={loginSchema}
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

export default Login;
