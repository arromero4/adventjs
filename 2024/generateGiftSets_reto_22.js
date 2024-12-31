// Reto #22: 🎁 Genera combinaciones de regalos
// Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

// Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

// Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.

// generateGiftSets(['car', 'doll', 'puzzle'])
// // [
// //   ['car'],
// //   ['doll'],
// //   ['puzzle'],
// //   ['car', 'doll'],
// //   ['car', 'puzzle'],
// //   ['doll', 'puzzle'],
// //   ['car', 'doll', 'puzzle']
// // ]

// generateGiftSets(['ball'])
// // [
// //   ['ball']
// // ]

// generateGiftSets(['game', 'pc'])
// // [
// //   ['game'],
// //   ['pc'],
// //   ['game', 'pc']
// // ]
// Nota: En el array de entrada siempre habrá al menos un juguete y nunca habrá juguetes duplicados.

// Consejo: Hay muchas formas de solucionar este problema, pero el backtracking puede ser una buena opción. 😉
/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  const ans = []
  function backtracking(idx = 0, curr = []) {
    if (curr.length > 0) {
      ans.push([...curr])
    }

    for (let i = idx; i < gifts.length; i++) {
      curr.push(gifts[i])
      backtracking(i + 1, curr)
      curr.pop()
    }

  }

  backtracking()

  return ans.sort((a,b) => a.length - b.length)
}

function generateGiftSets(gifts) {
  let r = [];
  let n = gifts.length;
  for(let i = 0; i < (1 << n); i++){
    let aux = [];
    for(let j = 0; j < n; j++){
        if((i & (1 << j)) != 0){
            aux.push(gifts[j]);
        }
    }
    if(aux.length != 0)
      r.push(aux);
  } 
  r.sort((a, b) => {
    if(a.length == b.length){
      let j = 0;
      while(gifts.indexOf(a[j]) - gifts.indexOf(b[j]) == 0){
        j++;
      }
      return gifts.indexOf(a[j]) - gifts.indexOf(b[j]);
    }
    return a.length - b.length;
  });
  return r;
}