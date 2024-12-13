// Reto #11: 🏴‍☠️ Nombres de archivos codificados
// El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha codificado los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y necesitan tu ayuda para descifrar los nombres.

// Cada archivo sigue este formato:

// Comienza con un número (puede contener cualquier cantidad de dígitos).
// Luego tiene un guion bajo _.
// Continúa con un nombre de archivo y su extensión.
// Finaliza con una extensión extra al final (que no necesitamos).
// Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números (0-9), otros guiones bajos (_) y guiones (-).

// Tu tarea es implementar una función que reciba un string con el nombre de un archivo codificado y devuelva solo la parte importante: el nombre del archivo y su extensión.

// Ejemplos:
// decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
// // ➞ "sleighDesign.png"

// decodeFilename('42_chimney_dimensions.pdf.hack2023')
// // ➞ "chimney_dimensions.pdf"

// decodeFilename('987654321_elf-roster.csv.tempfile')
// // ➞ "elf-roster.csv"

/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
   // Encuentra el índice del guion bajo y el primer punto antes de la extensión extra
   const startIndex = filename.indexOf('_') + 1;
   const endIndex = filename.lastIndexOf('.');
 
   // Devuelve el substring entre estos índices
   return filename.slice(startIndex, endIndex);
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"
