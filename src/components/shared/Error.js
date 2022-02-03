import React from 'react';
import PropType from 'prop-types';

const Error = ({ error }) => (
  <p
    className="error"
    style={{
      width: '100%',
      textAlign: 'left',
      fontSize: '2rem',
      marginBottom: '1rem',
      color: 'red',
    }}
  >
    {error}
  </p>
);

export default Error;

Error.propTypes = {
  error: PropType.string.isRequired,
};
