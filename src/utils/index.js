import storage from './storage';
import keyMapping from './keyMapping';
import timeFormat from './timeFormat';
import sudoku from './sudoku';
import fetch from './fetch';

export default {
  storage,
  keyMapping,
  timeFormat,
  sudoku,
  fetch,
  getHeaders: () => {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.user.firebaseToken
    };
  }
};
