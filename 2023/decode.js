// Day 4
// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// // Paso a paso:
// // 1. Invertimos el anidado -> sa(ualcatn)s
// // 2. Invertimos el que queda -> santaclaus
// Notas:

// Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
// En el mensaje final no deben quedar paréntesis.
// El nivel máximo de anidamiento es 2.

function decode(message) {
  let messageSplit = message.split('');
  let rangeStart = -1;
  let rangeEnd
  let count = 0;
  let length 

  messageSplit.filter((item) => {
    if(item == '(') count++;
  })

while (count > 0) {
messageSplit.map((item, index) => {
    if (item === '(') {
      rangeStart = index;
    } else if (item === ')' && rangeStart !== -1) {
      rangeEnd = index;
      length = messageSplit.slice(rangeStart + 1, rangeEnd);
  
      for (let i = 0; i < Math.floor(length.length / 2); i++) {
        const temp = length[i];
        length[i] = length[length.length - 1 - i];
        length[length.length - 1 - i] = temp;
      }
  
      // Reemplaza la porción invertida en el array original
      messageSplit.splice(rangeStart + 1, rangeEnd - rangeStart - 1, ...length);
  
      // Elimina los paréntesis y su contenido
      messageSplit.splice(rangeStart, 1);
      messageSplit.splice(rangeEnd-1, 1);
    
      rangeStart = -1;
    }
    
  });
  count--
}


 
return messageSplit.join('')
  


}

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!