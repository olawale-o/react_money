import { post } from './index';

const connect = async (args) => {
  const { endPoint, body } = args;
  const { response } = await post(endPoint, { body });
  return response;
};

export const createSavingsAccount = async (data) => connect(data);
export const createCurrentAccount = async (data) => connect(data);
