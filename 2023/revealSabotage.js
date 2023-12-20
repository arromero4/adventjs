// Reto #19: 💣 Enfrenta el sabotaje
// Challenge #19: Face the sabotage
// ¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

// Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

// Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

// Tu tarea es escribir una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes.

// Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .

// const store = [
//   ['*', ' ', ' ', ' '],
//   [' ', ' ', '*', ' '],
//   [' ', ' ', ' ', ' '],
//   ['*', ' ', ' ', ' ']
// ]

// console.log(revealSabotage(store))
// /* Debería mostrar:
// [
//     ['*', '2', '1', '1'],
//     ['1', '2', '*', '1'],
//     ['1', '2', '1', '1'],
//     ['*', '1', ' ', ' ']
// ]
// */
// Ten en cuenta que…

// Las celdas diagonales también se consideran adyacentes.
// El tablero siempre tendrá al menos una celda vacía y un juguete saboteado *.
// El tablero puede tener cualquier tamaño.
// Los números son cadenas de texto.

function revealSabotage(store) {
  const rows = store.length;
  const cols = store[0].length;

  const isWithinBounds = (row, col) => {
  //-1 0
  console.log('-----------')
  console.log(row >= 0 && row < rows && col >= 0 && col < cols)

  return row >= 0 && row < rows && col >= 0 && col < cols;
  }

  const countAdjacentSabotagedToCell = (row, col) => {
    let count = 0;
    //0 1
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        //-1 0
        if (isWithinBounds(i, j) && !(i === row && j === col) && store[i][j] === '*') {
          count++;
          console.log(count)
          console.log('-----------')
        }
      }
    }
    return count;
  };

  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
    if (store[i][j] === '*') {
        newRow.push('*');
      } else {
        const count = countAdjacentSabotagedToCell(i, j);
        newRow.push(count > 0 ? count.toString() : ' ');
      }
      console.log(newRow);
    }
    result.push(newRow);
  }
  return result;
}
const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]

revealSabotage(store)
/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/