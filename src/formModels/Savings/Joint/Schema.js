import * as Yup from 'yup';
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

Yup.addMethod(Yup.array, 'unique', function (message, mapper = (a) => a) {
  return this.test('unique', message, (value) => {
    const isUnique = value.length === new Set(value.map(mapper)).size;
    return isUnique;
  });
});

export default [
  // Bio
  Yup.object().shape({
    [bank.name]: Yup.string().required(bank.error.required).label('Bank name'),
    [balance.name]: Yup.string().required(`${balance.error.required}`).label('Amount'),
  }),

  // Signatories
  Yup.object().shape({
    signatories: Yup.array().of(
      Yup.object().shape({
        [signatories.id.name]: Yup.string(),
        [signatories.firstName.name]: Yup.string().required(signatories.firstName.error.required).label('First name'),
        [signatories.lastName.name]: Yup.string().required(signatories.lastName.error.required).label('Last name'),
        [signatories.phoneNumber.name]: Yup.string().required(signatories.phoneNumber.error.required).label('Phone number'),
      }),
    ).unique('Phone number must be unique', (a) => a.phoneNumber),
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
