import api from 'api';

export default {
  create: (game) => {
    return api.game.create(game);
  }
};
