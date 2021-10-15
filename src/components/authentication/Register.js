import React, { useState } from 'react';

const Register = () => {
  return (
    <div className="authentication">
      <div className="authentication-container">
        <form className="auth-form">
          <div className="form-header">
            <p>Create account</p>
          </div>
          <div className="field">
            <input className="input" placeholder="First name" />
          </div>
          <div className="field">
            <input className="input" placeholder="Last name" />
          </div>
          <div className="field">
            <input className="input" placeholder="Email" />
          </div>
          <div className="field">
            <input className="input" placeholder="Password" />
          </div>
          <div className="field">
            <input className="input" placeholder="Confirm password" />
          </div>
          <input type="submit" className="btn btn-secondary" value="Create" />
          <div className="form-footer">
            <p>
              <span>Already have an account? </span>
              <a href="hi">Log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
