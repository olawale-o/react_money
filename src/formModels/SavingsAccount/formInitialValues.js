import formModel from './formModel';

const {
  formField: {
    account,
    bank,
    balance,
    nextOfKinFirstName,
    nextOfKinLastName,
    nextOfKinPhoneNumber,
    nextOfKinEmail,
    nepaBill,
    identity,
    signature,
  },
} = formModel;

export default {
  [account.name]: '',
  [bank.name]: '',
  [balance.name]: '',
  [nextOfKinFirstName.name]: '',
  [nextOfKinLastName.name]: '',
  [nextOfKinPhoneNumber.name]: '',
  [nextOfKinEmail.name]: '',
  [nepaBill.name]: null,
  [identity.name]: null,
  [signature.name]: null,
};
