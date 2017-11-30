import config from 'config';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export default {
  create: (game) => {
    // TODO: Remove hardcode
    return new Promise(function(resolve) {
      setTimeout(() => {
        game.id = 456;

        resolve(game);
      }, 1000);
    });

    return fetch(
      `${config.baseUrl}/api/game/create`,
      {
          method: 'POST',
          headers,
          body: JSON.stringify(game)
      }
    ).then((r) => r.json());
  }
};
