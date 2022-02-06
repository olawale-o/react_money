import formModel from './formModel';

const {
  formField: {
    phoneNumber,
    nextOfKinFirstName,
    nextOfKinLastName,
    nextOfKinPhoneNumber,
    nextOfKinEmail,
  },
} = formModel;

export default {
  [phoneNumber.name]: '',
  [nextOfKinFirstName.name]: '',
  [nextOfKinLastName.name]: '',
  [nextOfKinPhoneNumber.name]: '',
  [nextOfKinEmail.name]: '',
};
