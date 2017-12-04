import config from 'config';
import utils from 'utils';

/**
 * Create a return a new Game
 * @param  {Object} game The game to be created
 * @return {Promise}
 */
const create = (game) => {
  return fetch(
    `${config.baseUrl}/api/game/create`,
    {
        method: 'POST',
        headers: utils.getHeaders(),
        body: JSON.stringify({ game })
    }
  ).then((r) => r.json())
  .then((r) => r.data.game);
}

const ready = (gameId, teamId, playerId) => {
  return fetch(
    `${config.baseUrl}/api/game/player/ready`,
    {
        method: 'POST',
        headers: utils.getHeaders(),
        body: JSON.stringify({ gameId, teamId, playerId })
    }
  ).then((r) => r.json());
}

const get = (gameId) => {
  // TODO: Remove hardcode
  return new Promise(function(resolve) {
    setTimeout(() => {
      const game = {
        type: 'alone',
        config: {
          showTimer: true
        },
        won: null,
        initial: {
          0: 1,
          1: 2
        },
        teams: {
          0: {
            solved: {
              79: 8,
              80: 9
            }
          }
        },
        startedAt: Date.now()
      };

      resolve(game);
    }, 1000);
  });

  return fetch(
    `${config.baseUrl}/api/game/get`,
    {
        method: 'POST',
        headers: utils.getHeaders(),
        body: JSON.stringify({ gameId })
    }
  ).then((r) => r.json());
}

const change = (gameId, teamId, i, newValue) => {
  // TODO: Remove hardcode
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve({ changed: true });
    }, 1000);
  });

  return fetch(
    `${config.baseUrl}/api/game/solved/change`,
    {
        method: 'POST',
        headers: utils.getHeaders(),
        body: JSON.stringify({ gameId, teamId, i, newValue })
    }
  ).then((r) => r.json());
}

export default {
  create,
  get,
  solved: {
    change
  },
  player: {
    ready
  }
};
