export default {
  process: (r) => {
    return new Promise(function(resolve, reject) {
      r.json().then((r) => {
        if (r.status !== 'ok') {
          reject(r);
        }

        resolve(r);
      });
    });
  }
};
