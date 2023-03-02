import { api } from './axios';

let exports = {};

exports.getUserById = (id) => {
  return api.get(`/users/${id}`);
};

exports.getCurrentUser = () => {
  return api.get(`/users/current`);
};

exports.updateUser = (userDto) => {
  return api.put('/users', userDto);
};

exports.deleteUser = (id) => {
  return api.delete(`/users/${id}`);
};

export default exports;