import { createStore, combineReducers } from 'redux';
import authReducer from './auth/auth';
import composedEnhancers from './enhancers';
import globalReducer from './global/global';

const reducer = combineReducers({ global: globalReducer, auth: authReducer });
const configureStore = createStore(reducer, composedEnhancers);

export default configureStore;
