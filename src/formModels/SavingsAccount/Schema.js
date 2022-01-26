import * as Yup from 'yup';
import formModel from './model';

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
    firstName: Yup.string().required(`${firstName.error.required}`).label('First name'),
    lastName: Yup.string().required(`${lastName.error.required}`).label('Last name'),
    phoneNumber: Yup.string().required(`${phoneNumber.error.required}`).label('Phone number'),
  }),

  Yup.object().shape({
    nextOfKinFirstName: Yup.string().required(`${nextOfKinFirstName.error.required}`).label('First name'),
    nextOfKinLastName: Yup.string().required(`${nextOfKinLastName.error.required}`).label('Last name'),
    nextOfKinPhoneNumber: Yup.string().required(`${nextOfKinPhoneNumber.error.required}`).label('Phone number'),
    nextOfKinEmail: Yup.string().email(`${nextOfKinEmail.error.required}`).required('Email is required').label('Email'),
  }),
];
