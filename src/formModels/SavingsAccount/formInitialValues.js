import formModel from './formModel';

const {
  formField: {
    account,
    bank,
    phoneNumber,
    nextOfKinFirstName,
    nextOfKinLastName,
    nextOfKinPhoneNumber,
    nextOfKinEmail,
  },
} = formModel;

export default {
  [account.name]: '',
  [bank.name]: '',
  [phoneNumber.name]: '',
  [nextOfKinFirstName.name]: '',
  [nextOfKinLastName.name]: '',
  [nextOfKinPhoneNumber.name]: '',
  [nextOfKinEmail.name]: '',
};
