// Reto #22: 🚂 Lenguaje de programación
// Challenge #22: Programming language
// En la fábrica de juguetes de Santa, los elfos están desarrollando un lenguaje de programación llamado Santa.js 👨‍💻👩‍💻 basado en símbolos para controlar sus máquinas de juguetes 🚂.

// Han creado un sistema de instrucciones simple y necesitan tu ayuda para construir un compilador que interprete estos símbolos.

// El compilador trabaja con un contador que inicialmente tiene un valor de 0. Las instrucciones modificarán el valor de este contador.

// Instrucciones del lenguaje de los elfos en base a símbolos:

// +: Incrementa en 1 el valor del contador.
// *: Multiplica por 2 el valor del contador.
// -: Resta 1 al valor del contador.
// %: Marca un punto de retorno. No modifica el contador.
// <: Vuelve atrás una vez a la última instrucción con el símbolo % que haya visto. Si no hay un % previo, no hace nada.
// ¿: Inicia un bloque condicional que se ejecuta si el contador es mayor a 0.
// ?: Finaliza un bloque condicional.
// Crea una función compile que reciba un string con las instrucciones del lenguaje y devuelve el resultado de ejecutarlas. Aquí tienes algunos ejemplos:

// compile('++*-') // 3
// // (1 + 1) * 2 - 1 = 3

// compile('++%++<') // 6
// // 1 + 1 + 1 + 1 + 1 + 1 = 6

// compile('++<--') // 0
// // 1 + 1 - 1 - 1 = 0

// compile('++¿+?') // 3
// // 1 + 1 + 1 = 3

// compile('--¿+++?') // -2
// // - 1 - 1 = -2

function compile(code) {
  let contador = 0;
  let length = code.length;
  let porcentaje = code.indexOf('%');
  let rango


    for (let i = 0; i < length; i++) {
      if (code[i] === '-') contador -= 1;
      if (code[i] === '+') contador += 1;
      if (code[i] === '*') contador *= 2;
  
      if (code[i] === '<') {
        for (let j = 0; j < porcentaje; j++) {
          if (code[j] === '+') contador += 1;
          if (code[j] === '*') contador *= 2;
          if (code[j] === '-') contador -= 1;
        }
      }
      if (code[i] === '¿' && contador >= 0) {
        break
      }
    }
  
  
  let indiceOpen = 0;
  let interrogationOpen, interrogationClose
  for (let i = 0; i < code.length; i++) {
      // Buscar el índice de la apertura a partir del índice anterior de cierre
      interrogationOpen = code.indexOf('¿', indiceOpen);
      
      // Si no se encuentra más aperturas, salir del bucle
      if (interrogationOpen === -1) {
          break;
      }
  
      // Buscar el índice de cierre a partir del índice de apertura
      interrogationClose = code.indexOf('?', interrogationOpen);
  
      // Si no se encuentra más cierres, salir del bucle
      if (interrogationClose === -1) {
          break;
      }
  
      // Imprimir el rango entre la apertura y el cierre
      rango = code.substring(interrogationOpen + 1, interrogationClose);

  
      // Actualizar el índiceOpen para la próxima iteración
      indiceOpen = interrogationClose + 1;
      

  }



  
  return contador;


}

//console.log(compile('++¿+?¿+?¿+?'))// 5
console.log(compile('--¿+++?+++¿--?'))//-1
//compile('-+¿+?')//0
//compile('--¿+++?')//2
//compile('<%+¿++%++<?')//7
//compile('<<<<<<+<<<<<+%')//2

//console.log(compile('++*-') )// 3
// (1 + 1) * 2 - 1 = 3

//console.log(compile('++%++<')) // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

//console.log(compile('++<--'))// 0
// // 1 + 1 - 1 - 1 = 0

//console.log(compile('++¿+?'))// 3
// // 1 + 1 + 1 = 3

// console.log(compile('--¿+++?')) // -2
// // - 1 - 1 = -2