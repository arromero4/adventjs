// Reto #21: 🪐 Mensaje binario
//Challenge #21: Binary message
// Los elfos están recibiendo mensajes binarios extraños desde Marte 🪐. ¿Los extraterrestres están tratando de comunicarse con ellos? 👽

// El mensaje que llega es un array de 0s y 1s. Parece que han encontrado un patrón… Para asegurarse, quieren encontrar el segmento más largo de la cadena donde el número de 0s y 1s sea igual.

// findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
// //                         |________|
// // posición del segmento:    [2, 5]
// // más largo equilibrado
// // de 0s y 1s

// findBalancedSegment([1, 1, 0])
// //                      |__|
// //                     [1, 2]

// findBalancedSegment([1, 1, 1])
// // no hay segmentos equilibrados: []
// Ten en cuenta que si hay más de un patrón equilibrado, debes devolver el más largo y el primero que encuentres de izquierda a derecha.

// Dicen que si encuentran el patrón, podrán enviar un mensaje de vuelta a Marte 🚀. Parece ser que tienen que enviarlos a https://mars.codes.

function findBalancedSegment(message) {
  let actual = [0]
  for (let i = 0; i < message.length; i++) {
    let check_balance = message[i], cont = 1
    for (let j = i + 1; j < message.length; j++) {
      check_balance += message[j]
      if (++cont / check_balance === 2 && cont > actual[0])
        actual = [cont, i, j]
    }
  }
  return actual.slice(1)
}