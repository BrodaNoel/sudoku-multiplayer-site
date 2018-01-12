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
  ).then(utils.fetch.process)
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
  ).then(utils.fetch.process)
  .then((r) => r.data);
}

const get = (gameId) => {
  return fetch(
    `${config.baseUrl}/api/game/get`,
    {
        method: 'POST',
        headers: utils.getHeaders(),
        body: JSON.stringify({ gameId })
    }
  ).then(utils.fetch.process)
  .then((r) => r.data.game);
}

const change = (gameId, teamId, i, newValue) => {
  return fetch(
    `${config.baseUrl}/api/game/solved/change`,
    {
        method: 'POST',
        headers: utils.getHeaders(),
        body: JSON.stringify({ gameId, teamId, i, newValue })
    }
  ).then(utils.fetch.process);
}

const isSolved = (gameId, teamId) => {
  return fetch(
    `${config.baseUrl}/api/game/isSolved`,
    {
        method: 'POST',
        headers: utils.getHeaders(),
        body: JSON.stringify({ gameId, teamId })
    }
  ).then(utils.fetch.process)
  .then((r) => r.data);
}

export default {
  create,
  get,
  solved: {
    change
  },
  isSolved,
  player: {
    ready
  }
};
