// Reto #5: 👞 Emparejando botas
// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los tamaños disponibles después de emparejar las botas.

// const shoes = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'R', size: 42 },
//   { type: 'I', size: 41 },
//   { type: 'I', size: 42 }
// ]

// organizeShoes(shoes)
// // [38, 42]

// const shoes2 = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 }
// ]
// // [38, 38]

// const shoes3 = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 36 },
//   { type: 'R', size: 42 },
//   { type: 'I', size: 41 },
//   { type: 'I', size: 42 }
// ]

// organizeShoes(shoes3)
// // [42]

function organizeShoes(shoes) {
  const counts = {}
  
  for(const shoe of shoes) {
    const { type, size } = shoe
    if(!counts[size]){
      counts[size] = {I: 0, R: 0}
    }
    counts[size][type]++
  }
  let result = []
  for (let size in counts) {
    console.log(size)
    let left = counts[size].I
    let right = counts[size].R
    const pairs = Math.min(left, right)

    for (let i = 0; i < pairs; i++) {
      result.push(Number(size))
    }
  }
  return result
}


const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))
// [38, 42]
