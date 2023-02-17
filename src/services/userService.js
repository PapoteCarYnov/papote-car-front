import api from './axios';

export default class UserService {

  getUserById(id) {
    return new Promise((resolve, reject) => {
      api.get(`/users/${id}`)
        .then((r) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      api.get(`/users/current`)
        .then((r) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  updateUser(userDto) {
    return new Promise((resolve, reject) => {
      api.put('/users', userDto)
        .then((r) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    })
  }

}