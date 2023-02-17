import api from './axios';

export default class MessageService {

  sendMessage(messageDto) {
    return api.post('/messages', messageDto);
  }

  getMessages(rideId) {
    return api.get(`/messages/${rideId}`);
  }

}