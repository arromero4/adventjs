// Reto #20: 🎁 Encuentra los regalos faltantes y duplicados
// Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

// Recibirás dos arrays:

// received: Lista con los regalos que Santa tiene actualmente.
// expected: Lista con los regalos que Santa debería tener.
// Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

// missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
// extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
// Ten en cuenta que:

// Los regalos pueden repetirse en ambas listas.
// Las listas de regalos están desordenadas.
// Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
// fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// // Devuelve:
// // {
// //   missing: { ball: 1 },
// //   extra: { car: 1 }
// // }

// fixGiftList(
//   ['book', 'train', 'kite', 'train'],
//   ['train', 'book', 'kite', 'ball', 'kite']
// )
// // Devuelve:
// // {
// //   missing: { ball: 1, kite: 1 },
// //   extra: { train: 1 }
// // }

// fixGiftList(
//   ['bear', 'bear', 'car'],
//   ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
// )
// // Devuelve:
// // {
// //   missing: { puzzle: 1, car: 2 },
// //   extra: {}
// // }

// fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// // Devuelve:
// // {
// //   missing: {},
// //   extra: {}
// // }
/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const totalCounts = {}
  for(const receivedItem of received) {
    totalCounts[receivedItem] ??= 0
    totalCounts[receivedItem]--
  }
  for(const expectedItem of expected) {
    totalCounts[expectedItem] ??= 0
    totalCounts[expectedItem]++
  }

  const fixedGifts = {missing: {}, extra: {}}
  const fixedGiftsFields = ["extra", "missing"]
  for(const item in totalCounts) {
    const count = totalCounts[item]
    const isExtraOrMissing = count != 0
    const group = fixedGiftsFields[+(count > 0)]
    ;[1][+isExtraOrMissing] ??= fixedGifts[group][item] = Math.abs(count)
  }

  return fixedGifts
}


function fixGiftList(received, expected) {
  const [missing, extra] = [{},{}]
  const keys = new Set(received.concat(expected))

  for(const key of keys){
    missing[key] = 0
    extra[key] = 0
  }

  for(const key of expected){
    missing[key] += 1
    extra[key] -= 1
  }

  for(const key of received){
    missing[key] -= 1
    extra[key] += 1
  }

  for(const key of keys){
    if(missing[key]<=0) delete missing[key]
    if(extra[key]<=0) delete extra[key]
  }

  return {extra, missing}
}
  