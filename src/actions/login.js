import utils from 'utils';

export default {
  login: user => {
    window.user = user;
    utils.storage.local.set('user', user);
  }
};
