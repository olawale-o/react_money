import PropType from 'prop-types';
import MyInput from './shared/MyInput';
import MySelect from './shared/MySelect';

const BioDataForm = ({ formField }) => {
  const { account, bank, balance } = formField;

  return (
    <>
      <MySelect name={account.name}>
        <option value="">Account Type</option>
        <option value="1">Personal Savings</option>
        <option value="2">Other Savings</option>
      </MySelect>
      <MySelect name={bank.name}>
        <option value="">Bank Name</option>
        <option value="1">Access Bank</option>
        <option value="2">Ecobank</option>
        <option value="3">Fidelity Bank</option>
        <option value="4">First Bank</option>
      </MySelect>
      <MyInput type="text" name={balance.name} placeholder="Min Amount" />
    </>
  );
};

export default BioDataForm;

BioDataForm.propTypes = {
  formField: PropType.shape({
    account: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    bank: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    balance: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
  }).isRequired,
};
