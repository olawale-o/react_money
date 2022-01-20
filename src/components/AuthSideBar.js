import React from 'react';
import wallet from '../assets/images/wallet.png';
import login from '../assets/images/login.png';

const AuthSideBar = () => (
  <div className="image-container">
    <div className="image">
      <div className="image-panel image-right">
        <img src={login} alt="login" />
      </div>
      <div className="image-panel image-left">
        <img src={wallet} alt="wallet" />
      </div>
    </div>
  </div>
);

export default AuthSideBar;
