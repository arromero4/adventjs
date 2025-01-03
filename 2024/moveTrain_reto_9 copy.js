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
  let position = null;

  // Convert board into 2D array and find the train position in one pass
  for (let i = 0; i < board.length; i++) {
    arrayTrain.push(board[i].split(''));
    const col = board[i].indexOf('@'); // Check if '@' exists in this row
    if (col !== -1) position = [i, col];
  }

  if (!position) throw new Error('Train not found on the board');

  let [row, col] = position;
  const numRows = arrayTrain.length;
  const numCols = arrayTrain[0].length;

  // Helper to check movement
  const checkMove = (newRow, newCol) => {
    if (newRow < 0 || newRow >= numRows || newCol < 0 || newCol >= numCols) return 'crash';
    const cell = arrayTrain[newRow][newCol];
    if (cell === '@' || cell === 'o') return 'crash';
    if (cell === '*') return 'eat';
    if (cell === '·') return 'none';
  };

  // Handle movement
  switch (mov) {
    case 'U': return checkMove(row - 1, col);
    case 'D': return checkMove(row + 1, col);
    case 'L': return checkMove(row, col - 1);
    case 'R': return checkMove(row, col + 1);
    default: throw new Error('Invalid movement');
  }
}