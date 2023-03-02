import api from './axios';

let exports = {};

exports.createBooking = (bookingDto) => {
  return api.post('/bookings', bookingDto);
};

exports.getBookingById = (bookingId) => {
  return api.get(`/bookings/${bookingId}`);
};

exports.getBookingByRideId = (rideId) => {
  return api.get(`/bookings/ride/${rideId}`);
};

exports.deleteBooking = (bookingId) => {
  return api.delete(`/bookings/${bookingId}`);
};

export default exports;