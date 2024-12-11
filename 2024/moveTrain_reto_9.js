//Reto #9: 🚂 El tren mágico


// Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

// El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

// Recibirás dos parámetros board y mov.

// board es un array de strings que representa el tablero:

// @ es la locomotora del tren.
// o son los vagones del tren.
// * es una fruta mágica.
// · son espacios vacíos.
// mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

// 'L': izquierda
// 'R': derecha
// 'U': arriba
// 'D': abajo.
// Con esta información, debes devolver una cadena de texto:

// 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
// 'eat': Si el tren recoge una fruta mágica (*).
// 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
// Ejemplo:

// const board = ['·····', '*····', '@····', 'o····', 'o····']

// console.log(moveTrain(board, 'U'))
// // ➞ 'eat'
// // Porque el tren se mueve hacia arriba y encuentra una fruta mágica

// console.log(moveTrain(board, 'D'))
// // ➞ 'crash'
// // El tren se mueve hacia abajo y la cabeza se choca consigo mismo

// console.log(moveTrain(board, 'L'))
// // ➞ 'crash'
// // El tren se mueve a la izquierda y se choca contra la pared

// console.log(moveTrain(board, 'R'))
// // ➞ 'none'
// // El tren se mueve hacia derecha y hay un espacio vacío en la derecha


/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let arrayTrain = [];
  let result = [];

  // Convert board into 2D array
  for (let i = 0; i < board.length; i++) {
    arrayTrain.push(board[i].split(''));
  }

  // Find the train's current position
  for (let i = 0; i < arrayTrain.length; i++) {
    for (let j = 0; j < arrayTrain[i].length; j++) {
      if (arrayTrain[i][j] === '@') {
        result = [i, j];
      }
    }
  }

  let [row, col] = result;
  let numRows = arrayTrain.length;
  let numCols = arrayTrain[0].length;

  if (mov === 'U') {
    if (row - 1 >= 0) {
      if (arrayTrain[row - 1][col] === '@' || arrayTrain[row - 1][col] === 'o') return 'crash';
      if (arrayTrain[row - 1][col] === '*') return 'eat';
      if (arrayTrain[row - 1][col] === '·') return 'none';
    } else {
      return 'crash'; // Out of bounds
    }
  }

  if (mov === 'D') {
    if (row + 1 < numRows) {
      if (arrayTrain[row + 1][col] === '@' || arrayTrain[row + 1][col] === 'o') return 'crash';
      if (arrayTrain[row + 1][col] === '*') return 'eat';
      if (arrayTrain[row + 1][col] === '·') return 'none';
    } else {
      return 'crash'; // Out of bounds
    }
  }

  if (mov === 'L') {
    if (col - 1 >= 0) {
      if (arrayTrain[row][col - 1] === '@' || arrayTrain[row][col - 1] === 'o') return 'crash';
      if (arrayTrain[row][col - 1] === '*') return 'eat';
      if (arrayTrain[row][col - 1] === '·') return 'none';
    } else {
      return 'crash'; // Out of bounds
    }
  }

  if (mov === 'R') {
    if (col + 1 < numCols) {
      if (arrayTrain[row][col + 1] === '@' || arrayTrain[row][col + 1] === 'o') return 'crash';
      if (arrayTrain[row][col + 1] === '*') return 'eat';
      if (arrayTrain[row][col + 1] === '·') return 'none';
    } else {
      return 'crash'; // Out of bounds
    }
  }

}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// // ➞ 'crash'
// // El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// // // ➞ 'crash'
// // El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// // ➞ 'none'
// // El tren se mueve hacia derecha y hay un espacio vacío en la derecha
