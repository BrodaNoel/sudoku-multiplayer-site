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

const isReady = () => {
  //
}

export default {
  create,
  player: {
    isReady
  }
};
