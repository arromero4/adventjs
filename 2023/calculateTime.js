// Reto #13: ⌚️ Calculando el tiempo
// Challenge #13: Calculating the time
// Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.

// Para ello te pasan un array con la duración de cada entrega. 
//El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.

// Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.

// Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00

// calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// // '-02:20:00'

// calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// // '00:30:00'          

// calculateTime([
//   '00:45:00',
//   '00:45:00',
//   '00:00:30',
//   '00:00:30'
// ]) // '-05:29:00'

function calculateTime(deliveries) {
  // Convertir las duraciones a segundos
  const duracionesEnSegundos = deliveries.map(duracion => {
    const [horas, minutos, segundos] = duracion.split(':');
    return parseInt(horas) * 3600 + parseInt(minutos) * 60 + parseInt(segundos);
  });




  // Calcular la suma total de los tiempos en segundos
  const tiempoTotalEnSegundos = duracionesEnSegundos.reduce((total, duracion) => total + duracion, 0);
  console.log(tiempoTotalEnSegundos)
  // Calcular el tiempo restante o sobrante en segundos
  let tiempoRestanteEnSegundos = tiempoTotalEnSegundos > 7 * 3600 
  ? tiempoTotalEnSegundos - 7 * 3600 
  : 7 * 3600 - tiempoTotalEnSegundos 

  // Formatear el resultado en HH:mm:ss
  let signo = tiempoTotalEnSegundos < 7 * 3600 ? '-' : '';
  let formatoHora = (valor) => valor.toString().padStart(2, '0');
  let horasRestantes = Math.floor(tiempoRestanteEnSegundos / 3600);
  let minutosRestantes = Math.floor((tiempoRestanteEnSegundos % 3600) / 60);
  let segundosRestantes = tiempoRestanteEnSegundos % 60;
  

  // Agregar ceros a la izquierda si es necesario
  //const formatoHora = (valor) => (valor < 10 ? '0' : '') + valor;

  let horas = formatoHora(horasRestantes)
  let minutos = formatoHora(minutosRestantes)
  let segundos = formatoHora(segundosRestantes)

  let resultado = `${signo}${horas}:${minutos}:${segundos}`
  return resultado

}

console.log(calculateTime(['01:01:01', '09:59:59', '01:01:01']))//"05:02:01"
console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']))//"-05:29:00"
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))//"-02:20:00"
console.log(calculateTime(['01:00:00', '05:00:00', '00:30:00']))//"-00:30:00"
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))//"00:30:00"
console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']))//"-05:29:00"
console.log(calculateTime(['02:00:00', '03:00:00', '02:00:00']))//"00:00:00"
console.log(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']))//"-00:00:01"