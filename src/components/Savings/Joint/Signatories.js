import React from 'react';
import { FieldArray } from 'formik';
import PropType from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import MyInput from '../../shared/MyInput';

const Signatories = ({ formField, values }) => {
  console.log(formField);
  const removeForm = (index, arrayHelpers) => {
    if (values.signatories.length > 2) {
      arrayHelpers.remove(index);
    }
  };

  const addForm = (arrayHelpers) => {
    arrayHelpers.push({
      id: uuidv4(),
      firstName: '',
      lastName: '',
      phoneNumber: '',
    });
  };

  return (
    <FieldArray
      name="signatories"
      render={(arrayHelpers) => {
        const { signatories } = values;
        return (
          <div className="signatories">
            <div className="signatories__fields">
              <div className="add">
                <button type="button" className="font__button" onClick={() => addForm(arrayHelpers)}>
                  <AiOutlinePlus aria-label="Add" />
                </button>
              </div>
              {signatories && signatories.length > 0
                ? signatories.map((signatory, index) => (
                  <div className="signatory__field" key={signatory.id}>
                    <p className="field__section">
                      Signatory
                      {' '}
                      {index + 1}
                    </p>
                    <MyInput type="text" name={`signatories.${index}.firstName`} placeholder="First name" />
                    <MyInput type="text" name={`signatories.${index}.lastName`} placeholder="Last name" />
                    <MyInput type="text" name={`signatories.${index}.phoneNumber`} placeholder="Phone number" />
                    <div className="add">
                      {
                        signatories.length > 2
                        && (
                          <button type="button" className="font__button" onClick={() => removeForm(index, arrayHelpers)}>
                            <AiOutlineMinus aria-label="Minus" />
                          </button>
                        )
                      }
                    </div>
                  </div>
                ))
                : null}
            </div>
          </div>
        );
      }}
    />
  );
};

export default Signatories;

Signatories.propTypes = {
  formField: PropType.shape({
    signatories: PropType.shape({
      firstName: PropType.shape({
        name: PropType.string.isRequired,
      }).isRequired,
      lastName: PropType.shape({
        name: PropType.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  values: PropType.shape({
    signatories: PropType.arrayOf(PropType.shape({
      firstName: PropType.string.isRequired,
      lastName: PropType.string.isRequired,
    })),
  }).isRequired,
};
