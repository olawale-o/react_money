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

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [phoneNumber.name]: '',
  [nextOfKinFirstName.name]: '',
  [nextOfKinLastName.name]: '',
  [nextOfKinPhoneNumber.name]: '',
  [nextOfKinEmail.name]: '',
};
