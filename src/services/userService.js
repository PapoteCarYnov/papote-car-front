import { api } from './axios';

export default class UserService {

  getUserById(id) {
    return api.get(`/users/${id}`);
  }

  getCurrentUser() {
    return api.get(`/users/current`);
  }

  updateUser(userDto) {
    return api.put('/users', userDto);
  }

  deleteUser(id) {
    return api.delete(`/users/${id}`);
  }

}