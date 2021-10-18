import * as Yup from 'yup';

export const validationSchema = {
  registerSchema: Yup.object().shape({
    firstName: Yup.string().required().label('First name'),
    lastName: Yup.string().required().label('Last name'),
    email: Yup.string().email('Please provide a valid email').required().label('Email'),
    password: Yup.string().required().label('Password'),
    confirmPassword: Yup.string().test('is-password', 'Password does not match',
      (value, context) => value === context.parent.password),
  }),
};

export const initialValues = {
  register: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
};
