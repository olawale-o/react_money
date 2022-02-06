import PropType from 'prop-types';
import MyInput from './shared/MyInput';

const BioDataForm = ({ formField }) => {
  const { phoneNumber } = formField;

  return (
    <>
      <MyInput type="text" name={phoneNumber.name} placeholder="Phone" />
    </>
  );
};

export default BioDataForm;

BioDataForm.propTypes = {
  formField: PropType.shape({
    phoneNumber: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
  }).isRequired,
};
