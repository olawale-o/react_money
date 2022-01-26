import PropType from 'prop-types';
import MyInput from './shared/MyInput';

const BioDataForm = ({ formField }) => {
  const { firstName, lastName, phoneNumber } = formField;

  return (
    <>
      <MyInput type="text" name={firstName.name} placeholder="First Name" />
      <MyInput type="text" name={lastName.name} placeholder="Last Name" />
      <MyInput type="text" name={phoneNumber.name} placeholder="Phone" />
    </>
  );
};

export default BioDataForm;

BioDataForm.propTypes = {
  formField: PropType.shape({
    firstName: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    lastName: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    phoneNumber: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
  }).isRequired,
};
