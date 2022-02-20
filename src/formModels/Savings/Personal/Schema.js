import * as Yup from 'yup';
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
    signature,
  },
} = formModel;

export default [
  // Bio
  Yup.object().shape({
    [account.name]: Yup.string().required(account.error.required).label('Account type'),
    [bank.name]: Yup.string().required(bank.error.required).label('Bank name'),
    [balance.name]: Yup.string().required(`${balance.error.required}`).label('Amount'),
  }),

  // Next of kin
  Yup.object().shape({
    [nextOfKinFirstName.name]: Yup.string().required(`${nextOfKinFirstName.error.required}`).label('First name'),
    [nextOfKinLastName.name]: Yup.string().required(`${nextOfKinLastName.error.required}`).label('Last name'),
    [nextOfKinPhoneNumber.name]: Yup.string().required(`${nextOfKinPhoneNumber.error.required}`).label('Phone number'),
    [nextOfKinEmail.name]: Yup.string().email(`${nextOfKinEmail.error.required}`).required('Email is required').label('Email'),
  }),

  // Credentials
  Yup.object().shape({
    [nepaBill.name]: Yup.mixed().nullable().required(`${nepaBill.error.required}`).label('Nepa bill'),
    [signature.name]: Yup.mixed().nullable().required(`${signature.error.required}`).label('Signature'),
  }),
];
