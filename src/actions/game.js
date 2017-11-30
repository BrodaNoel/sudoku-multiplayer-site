import api from 'api';

const create = (game) => {
  if (game.type === 'alone') {
    game.teams = {
      0: {
        players: {
          [window.user.data.uid]: {
            ready: false
          }
        }
      }
    };
  }

  return api.game.create(game);
}

const ready = (gameId) => {
  const playerId = window.user.data.uid;
  return api.game.player.ready(gameId, playerId);
}

const get = (gameId) => {
  return api.game.get(gameId);
}

export default {
  create,
  get,
  player: {
    ready
  }
};
