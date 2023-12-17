// Challenge #15: ↔️ Autonomous robot

// Reto #15: ↔️ Robot autónomo

// Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

// Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

// El almacén se representa como un array de cadenas de texto, donde:

// . significa que hay vía libre.
// * significa que hay un obstáculo.
// ! es la posición inicial del robot.
// Los movimientos son un array de cadenas de texto, donde:

// R mueve al robot una posición a la derecha.
// L mueve al robot una posición a la izquierda.
// U mueve al robot una posición hacia arriba.
// D mueve al robot una posición hacia abajo.
// Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

// Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

// const store = ['..!....', '...*.*.']

// const movements = ['R', 'R', 'D', 'L']
// const result = autonomousDrive(store, movements)
// console.log(result)
// /*
// [
//   ".......",
//   "...*!*."
// ]
// */

// // El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.
// Ten en cuenta que la store es un array que puede ser de un número de filas que va de 1 a 100, ya que tenemos almacenes de todos los tamaños.

// También que el robot es posible que termine en su posición inicial si no puede moverse o si está dando vueltas.
function autonomousDrive(store, movements) {
    // Find the initial position of the robot
    let initialRow = -1;
    let initialCol = -1;
  
    for (let i = 0; i < store.length; i++) {
      const colIndex = store[i].indexOf('!');
      if (colIndex !== -1) {
        initialRow = i;
        initialCol = colIndex;
        break;
      }
    }
  
    // Helper function to check if a given position is valid
    const isValidPosition = (row, col) => {
      return row >= 0 && row < store.length 
      && col >= 0 && col < store[row].length;
    };
  
    // Helper function to check if a given movement is valid
    const isValidMovement = (row, col, move) => {
      switch (move) {
        case 'R':
          return isValidPosition(row, col + 1) && store[row][col + 1] !== '*';
        case 'L':
          return isValidPosition(row, col - 1) && store[row][col - 1] !== '*';
        case 'U':
          return isValidPosition(row - 1, col) && store[row - 1][col] !== '*';
        case 'D':
          return isValidPosition(row + 1, col) && store[row + 1][col] !== '*';
        default:
          return false;
      }
    };
  
    // Perform the movements
    for (let move of movements) {
      switch (move) {
        case 'R':
          if (isValidMovement(initialRow, initialCol, 'R')) {
            store[initialRow] = store[initialRow].substring(0, initialCol) 
            + '.' 
            + store[initialRow].substring(initialCol + 1);
            initialCol += 1;
          }
          break;
        case 'L':
          if (isValidMovement(initialRow, initialCol, 'L')) {
            store[initialRow] = store[initialRow].substring(0, initialCol) 
            + '.' 
            + store[initialRow].substring(initialCol + 1);
            initialCol -= 1;
          }
          break;
        case 'U':
          if (isValidMovement(initialRow, initialCol, 'U')) {
            store[initialRow] = store[initialRow].substring(0, initialCol) 
            + '.' 
            + store[initialRow].substring(initialCol + 1);
            initialRow -= 1;
          }
          break;
        case 'D':
          if (isValidMovement(initialRow, initialCol, 'D')) {
            store[initialRow] = store[initialRow].substring(0, initialCol) 
            + '.' 
            + store[initialRow].substring(initialCol + 1);
            initialRow += 1;
          }
          break;
      }
    }
  
    // Update the final position with '!'
    store[initialRow] = 
    store[initialRow].substring(0, initialCol) + '!' 
    + store[initialRow].substring(initialCol + 1);
  
    return store;
  }


const store = ['..!....', '...*.*.']
const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.