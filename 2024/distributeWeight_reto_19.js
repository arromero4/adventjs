// Reto #19: 📦 Apila cajas mágicas para repartir regalos
// ¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

// Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

//     _
// 1: |_|
//     _____
// 2: |_____|
//     _____
// 5: |     |
//    |_____|
//      _________
// 10: |         |
//     |_________|

// // Representación en JavaScript:
// const boxRepresentations = {
//   1: [" _ ", "|_|"] ,
//   2: [" ___ ", "|___|"],
//   5: [" _____ ", "|     |", "|_____|"],
//   10: [" _________ ", "|         |", "|_________|"]
// }
// Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

// Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

// distributeWeight(1)
// // Devuelve:
// //  _
// // |_|

// distributeWeight(2)
// // Devuelve:
// //  ___
// // |___|

// distributeWeight(3)
// // Devuelve:
// //  _
// // |_|_
// // |___|

// distributeWeight(4)
// // Devuelve:
// //  ___
// // |___|
// // |___|

// distributeWeight(5)
// // Devuelve:
// //  _____
// // |     |
// // |_____|

// distributeWeight(6)
// // Devuelve:
// //  _
// // |_|___
// // |     |
// // |_____|
// Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  const boxRepresentations = {
          1: [" _ ", "|_|"],
          2: [" ___ ", "|___|"],
          5: [" _____ ", "|     |", "|_____|"],
          10: [" _________ ", "|         |", "|_________|"]
      }
      const values = Object.keys(boxRepresentations).reverse();
      const dist = [];
      while (weight > 0) {
          for (value of values) {
              if (weight - value >= 0) {
                  dist.push(value);
                  weight -= value;
                  break;
              }
          }
      }
      dist.sort((a, b) => a - b);
      let result = boxRepresentations[dist[0]][0] + '\n';
      for (j = 0; j < dist.length; j++) {
          const clen = boxRepresentations[dist[j]][dist[j].length - 1].length - 2;
          let nlen = 0;
          if (dist[j + 1]) nlen = boxRepresentations[dist[j + 1]][dist[j + 1].length - 1].length - 2;
          const len = (nlen - clen) > 0 ? (nlen - clen - 1) : 0;
  
          for (let i = 1; i < boxRepresentations[dist[j]].length - 1; i++) {
              result += boxRepresentations[dist[j]][i] + '\n';
          }
          result += boxRepresentations[dist[j]][boxRepresentations[dist[j]].length - 1] + '_'.repeat(len) + '\n';
      }
  
      return result.slice(0, -1);
  }
        