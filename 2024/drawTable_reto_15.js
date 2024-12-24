// Reto #15: ✏️ Dibujando tablas
// Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

// Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

// La tabla dibujada debe representar los datos del objeto de la siguiente manera:

// Tiene una cabecera con el nombre de la columna.
// El nombre de la columna pone la primera letra en mayúscula.
// Cada fila debe contener los valores de los objetos en el orden correspondiente.
// Cada valor debe estar alineado a la izquierda.
// Los campos dejan siempre un espacio a la izquierda.
// Los campos dejan a la derecha el espacio necesario para alinear la caja.
// Mira el ejemplo para ver cómo debes dibujar la tabla:

// drawTable([
//   { name: 'Alice', city: 'London' },
//   { name: 'Bob', city: 'Paris' },
//   { name: 'Charlie', city: 'New York' }
// ])

// // +---------+-----------+
// // | Name    | City      |
// // +---------+-----------+
// // | Alice   | London    |
// // | Bob     | Paris     |
// // | Charlie | New York  |
// // +---------+-----------+

// drawTable([
//   { gift: 'Doll', quantity: 10 },
//   { gift: 'Book', quantity: 5 },
//   { gift: 'Music CD', quantity: 1 }
// ])
// // +----------+----------+
// // | Gift     | Quantity |
// // +----------+----------+
// // | Doll     | 10       |
// // | Book     | 5        |
// // | Music CD | 1        |
// // +----

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  if(data.length === 0) return ''
  // Obtener las claves de los objetos y convertirlas a mayúscula.
  const headers = Object.keys(data[0])
  const capitalizedHeaders = headers.map(
    key => key.charAt(0).toUpperCase() + key.slice(1)
  )
  console.log(capitalizedHeaders)
  // Calcular el ancho máximo de cada columna.
  const columnWidths = headers.map((key, index) => {
    const headerLength = capitalizedHeaders[index].length;
    const maxValueLength = Math.max(
      ...data.map((row) => row[key].toString().length)
    );
    return Math.max(headerLength, maxValueLength);
  });
  console.log(columnWidths)
  // Función para crear una fila con el contenido alineado.
  const createRow = (values) => {
    return (
      '| ' +
      values
      .map((value, index) => 
        value.toString().padEnd(columnWidths[index]))
      .join(' | ') +
      ' |'
    )
  }
  // Crear la línea horizontal.
  const horizontalLine = 
  '+-' +
  columnWidths.map((width) => '-'.repeat(width)).join('-+-') +
  '-+'
  // Construir la tabla completa.
  const table = [
    horizontalLine,
    createRow(capitalizedHeaders),
    horizontalLine,
    ...data.map((row) => createRow(headers.map((key) => row[key]))),
    horizontalLine,
  ]

  // Combinar todas las partes y unirlas con saltos de línea.
  return table.join('\n')
}

console.log(
  // drawTable([
  //   { name: 'Alice', city: 'London' },
  //   { name: 'Bob', city: 'Paris' },
  //   { name: 'Charlie', city: 'New York' }
  // ]))

  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
  ])
)