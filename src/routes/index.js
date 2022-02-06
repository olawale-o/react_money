import axios from 'axios';

export const BASE_URI = 'http://localhost:8000/api';
export const headers = {
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
  },
};

const api = axios.create({
  baseURL: BASE_URI,
});

export const post = async (uri, options = {}) => {
  const { body = {} } = options;
  console.log('post', body);
  const response = await api.post(uri, body);
  console.log(response);
  return response.data;
};

export default api;
