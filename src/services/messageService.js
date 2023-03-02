import api from './axios';

let exports = {};

exports.sendMessage = (messageDto) => {
  return api.post('/messages', messageDto);
}

exports.getMessages = (rideId) => {
  return api.get(`/messages/${rideId}`);
}

export default exports;