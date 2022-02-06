import React from 'react';
import { useField } from 'formik';
import PropType from 'prop-types';

const MySelect = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  const {
    name, onBlur, onChange, value,
  } = field;
  return (
    <div className="field">
      <select
        name={name}
        className="input"
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        required
      >
        {children}
      </select>
      {
        meta.touched && meta.error && (
          <div className="field-error">
            { meta.error }
          </div>
        )
      }
    </div>
  );
};
export default MySelect;

MySelect.propTypes = {
  children: PropType.node.isRequired,
};
