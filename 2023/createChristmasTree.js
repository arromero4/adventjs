// Reto #10: 🎄 Crea tu propio árbol de navidad
// Challenge #10: Create your own Christmas tree
// ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

// Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

// Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

// Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

// Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

//    1
//   2 3
//  1 2 3
// 1 2 3 1
//    |
// Si recibimos la cadena *@o y el número 3, el árbol que debemos devolver es:

//   *
//  @ o
// * @ o
//   |
// Nota:

// El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
// Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
// Los adornos tienen un espacio en blanco entre ellos de separación.

function createChristmasTree(ornaments, height) {
  let ornamentsIndex = 0;
  let christmasTree = "";
  
  for (let i = 1; i <= height; i++) {
    christmasTree += " ".repeat(height - i);

    console.log('first i: ', i)
    for (let j = 1; j <= i * (2 - 1); j++) {
      console.log('orIdx start:',ornamentsIndex)
      christmasTree += ornaments.charAt(ornamentsIndex)
      ornamentsIndex = (ornamentsIndex + 1) % ornaments.length;
      console.log('orIdx after:',ornamentsIndex)
      console.log('j,i',j,i)
      if(j < i * (2 - 1)) christmasTree += " "

      console.log(christmasTree)
    }
    console.log('---------------') 
    christmasTree += '\n'
  }
  return christmasTree  += " ".repeat(height - 1) + "|\n"
}

// Example usage:
const tree1 = createChristmasTree("123", 4);
//console.log(tree1);

//const tree2 = createChristmasTree("*@o", 3);
//console.log(tree2);
