import * as Yup from 'yup';
import formModel from './formModel';

const {
  formField: {
    firstName,
    lastName,
    phoneNumber,
    nextOfKinFirstName,
    nextOfKinLastName,
    nextOfKinPhoneNumber,
    nextOfKinEmail,
  },
} = formModel;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.error.required}`).label('First name'),
    [lastName.name]: Yup.string().required(`${lastName.error.required}`).label('Last name'),
    [phoneNumber.name]: Yup.string().required(`${phoneNumber.error.required}`).label('Phone number'),
  }),

  Yup.object().shape({
    [nextOfKinFirstName.name]: Yup.string().required(`${nextOfKinFirstName.error.required}`).label('First name'),
    [nextOfKinLastName.name]: Yup.string().required(`${nextOfKinLastName.error.required}`).label('Last name'),
    [nextOfKinPhoneNumber.name]: Yup.string().required(`${nextOfKinPhoneNumber.error.required}`).label('Phone number'),
    [nextOfKinEmail.name]: Yup.string().email(`${nextOfKinEmail.error.required}`).required('Email is required').label('Email'),
  }),
];
