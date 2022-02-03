import { BASE_URI, headers } from './index';

const connect = async (args) => {
  const {
    endPoint, body, method, token = '',
  } = args;
  const authorization = token ? `Bearer ${token}` : '';
  headers.headers.Authorization = authorization;
  const uri = BASE_URI + endPoint;
  const options = {
    method,
    headers: headers.headers,
    body: JSON.stringify(body),
  };
  const response = await fetch(uri, options);
  return response.json();
};

export const loginRoute = async (data) => connect(data);

export const createRoute = async (data) => connect(data);
