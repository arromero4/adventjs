// Reto #6: 📦 ¿Regalo dentro de la caja?
// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

// Ejemplos:

// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) // ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) // ➞ true

// inBox([
//   "*####",
//   "#   #",
//   "#  #*",
//   "####"
// ]) // ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) // ➞ false

/** @param {string[]} box
 * @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const rows = box.length;
  const cols = box[0].length;
  console.log(rows)
  console.log(cols)
  if(box[0].includes("*") || box[box.length - 1].includes("*")) return false

  for(let i = 1; i < box.length - 1; i++) {
    const row = box[i];
    if(row[0] === "*" || row[row.length - 1] === "*") return false
    if(row.includes("*")) return true;

  }
  return false;
}

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]))