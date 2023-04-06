import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8080/api'
});

const token = localStorage.getItem('user-token');

export const config = {
  headers: { 
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
};
