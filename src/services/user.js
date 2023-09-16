import * as network from './network.js';

const register = (payload) => {
  return network.post(`user/register`, payload, false);
};

const login = (payload) => {
  return network.post(`user/login`, payload, false);
};

const getUserData = () => {
  return network.get(`user/profile`);
};

export default {
  register,
  login,
  getUserData
};
