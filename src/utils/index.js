import storage from './storage';
import keyMapping from './keyMapping';
import timeFormat from './timeFormat';

export default {
  storage,
  keyMapping,
  timeFormat,
  getHeaders: () => {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.user.firebaseToken
    };
  }
};
