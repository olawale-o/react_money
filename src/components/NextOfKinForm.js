import PropType from 'prop-types';
import MyInput from './shared/MyInput';

const NextOfKinForm = ({ formField }) => {
  const {
    nextOfKinFirstName,
    nextOfKinLastName,
    nextOfKinPhoneNumber,
    nextOfKinEmail,
  } = formField;
  return (
    <>
      <MyInput type="text" name={nextOfKinFirstName.name} placeholder="First Name" />
      <MyInput type="text" name={nextOfKinLastName.name} placeholder="Last Name" />
      <MyInput type="text" name={nextOfKinPhoneNumber.name} placeholder="Phone" />
      <MyInput type="text" name={nextOfKinEmail.name} placeholder="Email" />
    </>
  );
};

export default NextOfKinForm;

NextOfKinForm.propTypes = {
  formField: PropType.shape({
    nextOfKinFirstName: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    nextOfKinLastName: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    nextOfKinPhoneNumber: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    nextOfKinEmail: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
  }).isRequired,
};
