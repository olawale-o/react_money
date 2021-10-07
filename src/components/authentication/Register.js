import React from 'react';

const Register = () => (
  <div className="authentication">
    <form>
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
      <input type="submit" value="Create" />
    </form>
  </div>
);

export default Register;
