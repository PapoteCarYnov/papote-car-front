import api from './axios';

export default class StepService {

  addStep(stepDto) {
    return api.post('/steps', stepDto);
  }

  deleteStep(id) {
    return api.delete(`/steps/${id}`);
  }

}