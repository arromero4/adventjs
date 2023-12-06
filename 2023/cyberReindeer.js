// Reto #5: 🛷 El CyberTruck de Santa

// Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

// . = Carretera
// S = Trineo de Santa
// * = Barrera abierta
// | = Barrera cerrada
// Ejemplo de carretera: S...|....|.....

// Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

// Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

// Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

// const road = 'S..|...|..'
// const time = 10 // unidades de tiempo
// const result = cyberReindeer(road, time)

// /* -> result:
// [
//   'S..|...|..', // estado inicial
//   '.S.|...|..', // avanza el trineo la carretera
//   '..S|...|..', // avanza el trineo la carretera
//   '..S|...|..', // el trineo para en la barrera
//   '..S|...|..', // el trineo para en la barrera
//   '...S...*..', // se abre la barrera, el trineo avanza
//   '...*S..*..', // avanza el trineo la carretera
//   '...*.S.*..', // avanza el trineo la carretera
//   '...*..S*..', // avanza el trineo la carretera
//   '...*...S..', // avanza por la barrera abierta
// ]
// */
// El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

// Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

// Los elfos se inspiraron en este reto de Code Wars.

function cyberReindeer(road, time) {
    let result = [road]; // Inicializamos el array de resultados con el estado inicial
    let roadArray
    let sleighIndex
    for (let t = 1; t <= time; t++) {
      roadArray = road.split('');
      sleighIndex = road.indexOf('S');
      console.log(roadArray );
      // Avanzar el trineo
      roadArray[sleighIndex] = '.';
      roadArray[sleighIndex + 1] = 'S';
  
      // Abrir las barreras cada 5 unidades de tiempo
      if (t % 5 === 0) {
        for (let i = 0; i < roadArray.length; i++) {
          if (roadArray[i] === '|') {
            roadArray[i] = '*';
          }
        }
      }
  
      road = roadArray.join('');
      result.push(road); // Agrega el estado actual al array de resultados
    }
    
    return result;
  }

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result);