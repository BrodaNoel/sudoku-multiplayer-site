const getCol = (sudoku, y) => {
  // TODO: Improve this shit!!!
  let data = [];
  data.push(sudoku[y + (9 * 0)]);
  data.push(sudoku[y + (9 * 1)]);
  data.push(sudoku[y + (9 * 2)]);
  data.push(sudoku[y + (9 * 3)]);
  data.push(sudoku[y + (9 * 4)]);
  data.push(sudoku[y + (9 * 5)]);
  data.push(sudoku[y + (9 * 6)]);
  data.push(sudoku[y + (9 * 7)]);
  data.push(sudoku[y + (9 * 8)]);
  return data;
};

const getRow = (sudoku, y) => {
  // TODO: Improve this shit!!!
  let data = [];
  data.push(sudoku[0 + (9 * y)]);
  data.push(sudoku[1 + (9 * y)]);
  data.push(sudoku[2 + (9 * y)]);
  data.push(sudoku[3 + (9 * y)]);
  data.push(sudoku[4 + (9 * y)]);
  data.push(sudoku[5 + (9 * y)]);
  data.push(sudoku[6 + (9 * y)]);
  data.push(sudoku[7 + (9 * y)]);
  data.push(sudoku[8 + (9 * y)]);
  return data;
};

/**
 * Return true if a Sudoku is valid
 * @param  {Object}  sudoku The Sudoku {0: 4, 1: 2, ...}
 * @return {Boolean}        True in case of the Sudoku is valid
 */
const isValid = (sudoku) => {
  const valid = '123456789';

  for (var n = 0; n < 9; n++) {
    const isRowValid = getRow(sudoku, n).sort().toString().replace(/,/g, '') === valid;
    const isColValid = getCol(sudoku, n).sort().toString().replace(/,/g, '') === valid;

    if (!isRowValid || !isColValid) {
      return false;
    }
  }

  return true;
};

export default {
  isValid
};
