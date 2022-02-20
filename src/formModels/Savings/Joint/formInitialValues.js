import { v4 as uuidv4 } from 'uuid';
import formModel from './formModel';

const {
  formField: {
    bank,
    balance,
    signatories,
    nextOfKinFirstName,
    nextOfKinLastName,
    nextOfKinPhoneNumber,
    nextOfKinEmail,
    nepaBill,
    signature,
  },
} = formModel;

export default {
  [bank.name]: '',
  [balance.name]: '',
  signatories: [
    {
      [signatories.id.name]: uuidv4(),
      [signatories.firstName.name]: '',
      [signatories.lastName.name]: '',
      [signatories.phoneNumber.name]: '',
    },
    {
      [signatories.id.name]: uuidv4(),
      [signatories.firstName.name]: '',
      [signatories.lastName.name]: '',
      [signatories.phoneNumber.name]: '',
    },
  ],
  [nextOfKinFirstName.name]: '',
  [nextOfKinLastName.name]: '',
  [nextOfKinPhoneNumber.name]: '',
  [nextOfKinEmail.name]: '',
  [nepaBill.name]: null,
  [signature.name]: null,
};
