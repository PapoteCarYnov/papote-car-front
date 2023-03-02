import api from './axios';

let exports = {};

exports.addStep = (stepDto) => {
  return api.post('/steps', stepDto);
};

exports.deleteStep = (id) => {
  return api.delete(`/steps/${id}`);
};

export default exports;