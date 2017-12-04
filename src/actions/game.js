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

const ready = (gameId, teamId) => {
  const playerId = window.user.data.uid;
  teamId = teamId ? teamId : 0;

  return api.game.player.ready(gameId, teamId, playerId);
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
