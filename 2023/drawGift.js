// Day 7
// Challenge #7: 📦 The 3D boxes
// Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

// Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

// Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

// drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

// drawGift(5, '*')
// /*
//     #####
//    #***##
//   #***#*#
//  #***#**#
// #####***#
// #***#**#
// #***#*#
// #***##
// #####
// */

// drawGift(1, '^')
// /*
// #
// */
// Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

// Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".


/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

function drawGift(size, symbol) {
  let baseline = '#'.repeat(size)
  let draw = []
  let finalDraw = ''

  for (let index = 0; index < size; index++) {
    let deep = Array(index).fill(symbol)
    
    deep[deep.length - 1] = '#'
    
    let face = [...baseline.split(''), ...deep]
  
    if(index > 0 && index < size - 1) {
      face.fill(symbol, 1, size - 1)

    }
    draw.push(face)
    
  }
 
  

  draw = [...draw,...draw.reverse()]

draw.splice(size,1)

draw.forEach((element, index) => {
    let whiteSpace = ''
    if (index < size - 1) {
      whiteSpace = ' '.repeat((size - 1) - index)
    }
    finalDraw += whiteSpace + element.join('') + '\n'
  })
  return finalDraw
}
console.log(drawGift(4, '+'))