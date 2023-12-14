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
  const duracionesEnSegundos = deliveries.map(duracion => {
    const [horas, minutos, segundos] = duracion.split(':').map(Number);
    return horas * 3600 + minutos * 60 + segundos;
  });

  const tiempoTotalEnSegundos = duracionesEnSegundos.reduce((total, duracion) => total + duracion, 0);

  const tiempoRestanteEnSegundos = Math.abs(tiempoTotalEnSegundos - 7 * 3600);
  const signo = tiempoTotalEnSegundos < 7 * 3600 ? '-' : '';
  
  const formatoHora = (valor) => valor.toString().padStart(2, '0');
  const horasRestantes = Math.floor(tiempoRestanteEnSegundos / 3600);
  const minutosRestantes = Math.floor((tiempoRestanteEnSegundos % 3600) / 60);
  const segundosRestantes = tiempoRestanteEnSegundos % 60;

  const horas = formatoHora(horasRestantes);
  const minutos = formatoHora(minutosRestantes);
  const segundos = formatoHora(segundosRestantes);

  return `${signo}${horas}:${minutos}:${segundos}`;

}

// Utilicé map(Number) para convertir directamente las partes de tiempo a números en lugar de usar parseInt.
// Usé Math.abs para obtener el valor absoluto de la diferencia, eliminando la necesidad de la operación condicional.
// Simplifiqué la creación del string de resultado al combinar directamente las variables.
// Utilicé const para declarar las variables en lugar de let donde sea posible, ya que no cambian su valor. Esto ayuda a mejorar la claridad del código.

// console.log(calculateTime(['01:01:01', '09:59:59', '01:01:01']))//"05:02:01"
// console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']))//"-05:29:00"
// console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))//"-02:20:00"
// console.log(calculateTime(['01:00:00', '05:00:00', '00:30:00']))//"-00:30:00"
// console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))//"00:30:00"
// console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']))//"-05:29:00"
// console.log(calculateTime(['02:00:00', '03:00:00', '02:00:00']))//"00:00:00"
// console.log(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']))//"-00:00:01"