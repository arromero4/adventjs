// Reto #18: 🔢 El reloj digital
// Challenge #18: The digital clock
// En la fábrica de juguetes, los elfos están programando un reloj digital para mantenerse en horario con la producción de regalos. Sin embargo, se han encontrado con un desafío de programación interesante. Necesitan una función que, dada una hora en formato 'HH:MM', cree una representación visual de esta hora en un reloj digital devolviendo un array de arrays de caracteres.

// La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocupa 7 filas y 3 columnas. Los dígitos están compuestos por asteriscos (*) y espacios en blanco (). Entre cada dígito hay una columna vacía.

// Los dos puntos para separar horas y minutos se dibujan usando dos asteríscos (*) y siempre se colocan en la misma posición, en las filas 2 y 4, en la columna 9, respectivamente (nota: la indexación de filas y columnas comienza en 0).

// Por ejemplo, si la función recibe 01:30 debe devolver:

// drawClock('01:30') // ⬇️

// [
//   ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//   ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
// ]
// Para saber cómo dibujar cada dígito, nos han pasado la siguiente imagen. Como ves, cada dígito está compuesto por 7 filas y 3 columnas. Los píxeles en rojo, nosotros lo representaremos con un asterisco (*), y los píxeles en blanco, con un espacio ():

function drawClock(time) {
  const digits = [
    [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*']
    ],
    [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*']
    ],
    [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*']
    ],
    [
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*']
    ],
    [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*']
    ]
  ];

  const colon = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    ['*', ' ', ' '],
    [' ', ' ', ' '],
    ['*', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  const result = Array.from({ length: 7 }, () => Array(17).fill(' '));
  console.log(result);


  const [hours, minutes] = time.split(':').map(Number);
  
  const drawDigit = (digit, startColumn) => {
    
    for (let i = 0; i < digit.length; i++) {
      for (let j = 0; j < digit[i].length; j++) {
        result[i][startColumn + j] = digit[i][j];
      }
    }
  };

  // Draw hours
  drawDigit(digits[Math.floor(hours / 10)], 0);
  drawDigit(digits[hours % 10], 4);

  // Draw colon
  drawDigit(colon, 8);

  // Draw minutes
  drawDigit(digits[Math.floor(minutes / 10)], 10);
  drawDigit(digits[minutes % 10], 14);

  return result;
}

// Example usage:
// const clockArray = drawClock('01:30');
// console.log(clockArray.map(row => row.join('')).join('\n'));

// Example usage:
const clockArray = drawClock('01:30');
//console.log(JSON.stringify(clockArray, null, 2));
//Test: drawClock('01:30')

//Expected:
// [
//   ["*","*","*", " ", " "," ","*", " "," "," ", "*","*","*", " ", "*","*","*"],
//   ["*"," ","*", " ", " "," ","*", " "," "," ", " "," ","*", " ", "*"," ","*"],
//   ["*"," ","*", " ", " "," ","*", " ","*"," ", " "," ","*", " ", "*"," ","*"],
//   ["*"," ","*", " ", " "," ","*", " "," "," ", "*","*","*", " ", "*"," ","*"],
//   ["*"," ","*", " ", " "," ","*", " ","*"," ", " "," ","*", " ", "*"," ","*"],
//   ["*"," ","*", " ", " "," ","*", " "," "," ", " "," ","*", " ", "*"," ","*"],
//   ["*","*","*", " ", " "," ","*", " "," "," ", "*","*","*", " ", "*","*","*"]
// ]

// Actual:
// [
//   ["*","*","*", " ", " "," ","*", " "," "," ", "*","*","*", " ", "*","*","*"],
//   ["*"," ","*", " ", " "," ","*", " "," "," ", " "," ","*", " ", "*"," ","*"],
//   ["*"," ","*", " ", " "," ","*", " "," ","*", " "," ","*", " ", "*"," ","*"],
//   ["*"," ","*", " ", " "," ","*", " "," "," ", "*","*","*", " ", "*"," ","*"],
//   ["*"," ","*", " ", " "," ","*", " "," ","*", " "," ","*", " ", "*"," ","*"],
//   ["*"," ","*", " ", " "," ","*", " "," "," ", " "," ","*", " ", "*"," ","*"],
//   ["*","*","*", " ", " "," ","*", " "," "," ", "*","*","*", " ", "*","*","*"]
// ]