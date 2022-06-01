import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
});

export const onResponse = (response) => {
  return response.data;
};

export const onError = (error) => {
  // TODO:
  // some error logic
};

export default api;