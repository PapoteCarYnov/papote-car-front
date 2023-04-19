import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.VUE_APP_ENV
});

const token = localStorage.getItem('user-token');

export const config = {
  headers: { 
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": process.env.VUE_APP_ENV,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, x-requested-with, content-type, Content-Type, Authorization"
  }
};
