import storage from './storage';
import keyMapping from './keyMapping';
import timeFormat from './timeFormat';
import fetch from './fetch';

export default {
  storage,
  keyMapping,
  timeFormat,
  fetch,
  getHeaders: () => {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.user.firebaseToken
    };
  }
};
