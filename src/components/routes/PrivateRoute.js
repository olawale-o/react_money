import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropType from 'prop-types';
import authSelector from '../../redux/auth/auth_selector';


const PrivateRoute = ({ children }) => {
  const { user } = useSelector(authSelector);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

PropType.propTypes = {
  children: PropType.node.isRequired,
};
