import * as Yup from 'yup';

const email = Yup.string().email('Please provide a valid email').required().label('Email');
const password = Yup.string().required().label('Password');

export const validationSchema = {
  registerSchema: Yup.object().shape({
    firstName: Yup.string().required().label('First name'),
    lastName: Yup.string().required().label('Last name'),
    email,
    password,
    confirmPassword: Yup.string().test('is-password', 'Password does not match',
      (value, context) => value === context.parent.password),
  }),
  loginSchema: Yup.object().shape({
    email,
    password,
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
  login: {
    email: '',
    password: '',
  },
};
