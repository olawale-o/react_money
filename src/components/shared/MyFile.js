import React from 'react';
import { useField } from 'formik';
import PropType from 'prop-types';

const MyFile = ({
  type, setFieldValue, ...props
}) => {
  const [field, meta] = useField(props);
  const {
    name, onBlur,
  } = field;
  return (
    <div className="field">
      <input
        type={type}
        className="input"
        name={name}
        onBlur={onBlur}
        onChange={(e) => {
          setFieldValue(name, e.target.files[0]);
        }}
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
export default MyFile;

MyFile.defaultProps = {
  setFieldValue: () => {},
};

MyFile.propTypes = {
  type: PropType.string.isRequired,
  setFieldValue: PropType.func,
};
