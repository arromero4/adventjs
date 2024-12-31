// Reto #17: 💣 Busca las bombas del Grinch

// El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

// Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

// detectBombs([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ])
// // [
// //   [1, 2, 1],
// //   [2, 1, 1],
// //   [1, 1, 1]
// // ]

// detectBombs([
//   [true, false],
//   [false, false]
// ])
// // [
// //   [0, 1],
// //   [1, 1]
// // ]

// detectBombs([
//   [true, true],
//   [false, false],
//   [true, true]
// ])

// // [
// //   [1, 1],
// //   [4, 4],
// //   [1, 1]
// // ]
// Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Crear una copia de la cuadrícula para almacenar el resultado
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Movimientos para las posiciones adyacentes (incluye diagonales)
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1]
  ];

  // Recorremos la cuadrícula
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === true) {
        // Para cada celda con bomba, incrementamos las celdas vecinas en `result`
        for (const [dx, dy] of directions) {
          const newRow = row + dx;
          const newCol = col + dy;

          // Verificar que las coordenadas están dentro de los límites
          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < cols
          ) {
            result[newRow][newCol]++;
          }
        }
      }
    }
  }

  return result;
}
  