import api from './axios';

export default class BookingService {

  createBooking(bookingDto) {
    return api.post('/bookings', bookingDto);
  }

  getBookingById(bookingId) {
    return api.get(`/bookings/${bookingId}`);
  }

  getBookingByRideId(rideId) {
    return api.get(`/bookings/ride/${rideId}`);
  }

  deleteBooking(bookingId) {
    return api.delete(`/bookings/${bookingId}`);
  }

}