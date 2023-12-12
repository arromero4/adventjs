// Reto #9: Alterna las luces
//Challenge #9: Switch the lights

// Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

// Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

// Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

// adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// // -> 1 (cambias la cuarta luz a 🔴)

// adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

// adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// // -> 0 (ya están alternadas)

// adjustLights(['🔴', '🔴', '🔴'])
// // -> 1 (cambias la segunda luz a 🟢)


function adjustLights(lights) {
  let changes = 0;
  let initialColor = lights[0];

  for (let i = 0; i < lights.length; i++) {
    console.log(i,lights[i],initialColor);
    if (lights[i] !== initialColor) changes++;
    // Alternar el color inicial para la próxima luz
    initialColor = initialColor === '🔴' ? '🟢' : '🔴';
  }
  // Calcular el mínimo entre changes y su complemento
  changes = changes < lights.length - changes
    ? changes
    : lights.length - changes;
  return changes;


}

//adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

// adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

//adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)