import axios from 'axios';
import { logout } from '../utils/helpers';
const API_HOST = 'http://localhost:3002/';

const HeadersWithAuth = (uploadFile = false) => {
  // return authorization header with jwt token
  let authToken = sessionStorage.getItem('authToken');

  if (authToken) {
    return {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    };
  } else {
    return {};
  }
};

const HeadersWithoutAuth = (uploadFile = false) => {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json',
  };
};

export const get = (
  url,
  params,
  isAuth = true,
  responseType = 'json',
  config = {}
) => {
  const setHeader = isAuth ? HeadersWithAuth() : HeadersWithoutAuth();
  return axios
    .get(API_HOST + url, {
      headers: setHeader,
      params: params,
      responseType: responseType,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => handleError(error));
};

export const post = (
  url,
  payload,
  isAuth = true,
  config = {}
) => {
  const setHeader = isAuth
    ? HeadersWithAuth()
    : HeadersWithoutAuth();
  return axios
    .post(API_HOST + url, payload, {
      headers: setHeader,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return handleError(error);
    });
};

export const handleError = (error) => {
  if (error?.response?.status === 403 || error?.response?.status === 401) {
    logout();
    window.location.href = '/login';
  }
  console.log('User not supported or API error');
  throw error.response.data;
};
