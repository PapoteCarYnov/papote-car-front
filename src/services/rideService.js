import { api, config } from './axios';

let exports = {};

exports.createRide = (rideDto) => {
  return api.post('/rides', rideDto, config);
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

exports.getCities = (name) => {
  return api.get(`/cities?name=${name}`);
}

exports.updatePrice = (priceDto) => {
  return api.post('/prices', priceDto);
}

export default exports;
