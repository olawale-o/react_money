export const LOADING = 'auth/auth/LOADING';
export const REGISTER = 'auth/auth/REGISTER';

const initialState = {
  loading: false,
  user: null,
};

export const loading = (payload) => ({
  type: LOADING,
  payload,
});

export const register = (payload) => ({
  type: REGISTER,
  payload,
});

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
