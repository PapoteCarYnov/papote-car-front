import api from './axios';

export default class AuthService {

  register(userCreateDto) {
    return api.post('/auth/register', userCreateDto);
  }

  logIn(authDto) {
    return api.post('/auth/login', authDto);
  }

} 