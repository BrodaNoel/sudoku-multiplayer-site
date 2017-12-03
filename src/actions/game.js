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

const change = (gameId, teamId, i, newValue) => {
  return api.game.solved.change(gameId, teamId, i, newValue);
}

export default {
  create,
  solved: {
    change
  },
  get,
  player: {
    ready
  }
};
