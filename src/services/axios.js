import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8080/api'
});

const token = localStorage.getItem('user-token');

export const config = {
  headers: { 
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': 'http://localhost:8081',
  }
};
