const mapping = {
  37: 'LEFT',
  38: 'TOP',
  39: 'RIGHT',
  40: 'BOTTOM',
  48: 0,
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
  96: 0,
  97: 1,
  98: 2,
  99: 3,
  100: 4,
  101: 5,
  102: 6,
  103: 7,
  104: 8,
  105: 9
};

export default {
  map: keyCode => mapping[keyCode] || ''
};
