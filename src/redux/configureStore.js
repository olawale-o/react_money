import { createStore, combineReducers } from 'redux';
import authReducer from './auth/auth';
import composedEnhancers from './enhancers';

const reducer = combineReducers({ auth: authReducer });
const configureStore = createStore(reducer, composedEnhancers);

export default configureStore;
