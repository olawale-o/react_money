import React from 'react';
import { useField } from 'formik';
import PropType from 'prop-types';

const MyInput = ({
  type, placeholder, ...props
}) => {
  const [field, meta] = useField(props);
  const {
    name, onBlur, onChange, value,
  } = field;
  return (
    <div className="field">
      <input
        type={type}
        className="input"
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        required
      />
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
export default MyInput;

MyInput.defaultProps = {
  placeholder: '',
};

MyInput.propTypes = {
  type: PropType.string.isRequired,
  placeholder: PropType.string,
};
