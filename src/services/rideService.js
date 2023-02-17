import api from './axios';

export default class RideService {

  createRide(rideDto) {
    return api.post('/rides', rideDto);
  }

  getRide(id) {
    return api.get(`/rides/${id}`);
  }

  updateRide(rideDto) {
    return api.put('/rides', rideDto);
  }

  deleteRide(id) {
    return api.delete(`/rides/${id}`);
  }

} 