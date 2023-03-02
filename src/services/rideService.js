import api from './axios';

let exports = {};

exports.createRide = (rideDto) => {
  return api.post('/rides', rideDto);
};

exports.getRide = (id) => {
  return api.get(`/rides/${id}`);
};

exports.updateRide = (rideDto) => {
  return api.put('/rides', rideDto);
};

exports.deleteRide = (id) => {
  return api.delete(`/rides/${id}`);
};

export default exports;