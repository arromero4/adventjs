// Reto #8: 🦌 La carrera de renos
// ¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
// Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

// Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

// La información que recibes:

// indices: Un array de enteros que representan el progreso de cada reno en la pista:
// 0: El carril está vacío.
// Número positivo: La posición actual del reno desde el inicio de la pista.
// Número negativo: La posición actual del reno desde el final de la pista.
// length: La longitud de cada carril.
// Devuelve un string que represente la pista de la carrera:

// Cada carril tiene exactamente length posiciones llenas de nieve (~).
// Cada reno se representa con la letra r.
// Los carriles están numerados al final con /1, /2, etc.
// La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.
// Ejemplos:

// drawRace([0, 5, -3], 10)
// /*
//   ~~~~~~~~~~ /1
//  ~~~~~r~~~~ /2
// ~~~~~~~r~~ /3
// */

// drawRace([2, -1, 0, 5], 8)
// /*
//    ~~r~~~~~ /1
//   ~~~~~~~r /2
//  ~~~~~~~~ /3
// ~~~~~r~~ /4
// */

// drawRace([3, 7, -2], 12)
// /*
//   ~~~r~~~~~~~~ /1
//  ~~~~~~~~r~~~ /2
// ~~~~~~~~~~r~ /3
// */

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let result = "";
  
  // Iteramos sobre el arreglo indices
  for (let i = 0; i < indices.length; i++) {
    // Espacios antes de cada carril
    let spaces = ' '.repeat(indices.length - 1 - i);
    
    // Si el índice es 0, no ponemos 'r' en el carril
    if (indices[i] === 0) {
      result += spaces + '~'.repeat(length) + ' /' + (i + 1);
    } else {
      // Si el índice es positivo, colocamos 'r' en la posición indicada
      let index = indices[i] > 0 ? indices[i] : length + indices[i];
      
      // Formamos la fila sin necesidad de crear un array completo
      result += spaces + '~'.repeat(index) + 'r' + '~'.repeat(length - index - 1) + ' /' + (i + 1);
    }

    // Añadimos un salto de línea si no es la última fila
    if (i < indices.length - 1) {
      result += '\n';
    }
  }

  return result;
}


drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

// drawRace([0, 5, -3], 10)
// /*
//   ~~~~~~~~~~ /1
//  ~~~~~r~~~~ /2
// ~~~~~~~r~~ /3
// */

