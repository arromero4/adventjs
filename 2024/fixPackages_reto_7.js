// Reto #7: 👹 El ataque del Grinch
// ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

// Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

// Recibirás un string que contiene letras y paréntesis.
// Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
// Si hay paréntesis anidados, resuelve primero los más internos.
// Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
// Nos ha dejado algunos ejemplos:

// fixPackages('a(cb)de')
// // ➞ "abcde"
// // Volteamos "cb" dentro de los paréntesis

// fixPackages('a(bc(def)g)h')
// // ➞ "agdefcbh"
// // 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

// fixPackages('abc(def(gh)i)jk')
// // ➞ "abcighfedjk"
// // 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

// fixPackages('a(b(c))e')
// // ➞ "acbe"
// // 1º volteamos "c" → "c", luego "bc" → "cb"
/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let messageSplit = packages.split('');
  let count = messageSplit.filter(item => item === '(').length;
  
  while (count > 0) {
    let rangeStart = -1;
    let rangeEnd
    let length
    messageSplit.map((item, index) => {
      if (item === '(') {
        rangeStart = index;
      } else if (item === ')' && rangeStart !== -1) {
        rangeEnd = index;
        length = messageSplit
          .slice(rangeStart + 1, rangeEnd)
          .reverse();

        messageSplit
          .splice(rangeStart + 1, rangeEnd - rangeStart - 1, ...length);
        messageSplit.splice(rangeStart, 1);
        messageSplit.splice(rangeEnd - 1, 1);
        rangeStart = -1;
      }
    });
    count--
  }
  return messageSplit.join('');
}
fixPackages('a(bc(def)g)h')