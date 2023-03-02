import { api } from './axios';

let exports = {};

exports.register = (userCreateDto) => {
    return api.post('/auth/register', userCreateDto);
}

exports.login = (authDto) => {
    return api.post('/auth/login', authDto);
}

export default exports;
