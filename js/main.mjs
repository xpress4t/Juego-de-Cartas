import { cardSize } from './constants.mjs';

// Players 2 - 10
// Cards' constructor
function Card(s, c, p, x, y) {
  const symbol = s;
  this.getSymbol = () => symbol;

  const color = c;
  this.getColor = () => color;

  const score = p;
  this.getScore = () => score;

  const picX = x;
  const picY = y;
  this.getPicCoords = () => ({
    x: -(cardSize.width * picX - picX),
    y: -(cardSize.height * picY - picY)
  });
}

const colors = ['red', 'yellow', 'green', 'blue'];

const cards = [];

colors.forEach((color, index) => {
  cards.push(
    new Card('1', color, 1, index, 0),
    new Card('2', color, 2, index, 1),
    new Card('3', color, 3, index, 2),
    new Card('4', color, 4, index, 3),
    new Card('5', color, 5, index, 4),
    new Card('6', color, 6, index, 5),
    new Card('7', color, 7, index, 6),
    new Card('8', color, 8, index, 7),
    new Card('9', color, 9, index, 8),
    new Card('forbidden', color, 9, index, 8),
    new Card('reverse', color, 9, index, 8),
    new Card('take2', color, 9, index, 8)
  );
});

// TODO: Añadir las cartas negras manualmente (+4 y cambia color)

/**
 *
 * `mostrarCarta`():
 *
 * Ejemplo: Coge la primera carta `cards[0]`:
 *
 * 1- Crear un elemento `div`
 *  1.a- Asignarle una clase al `div`
 *  1.b- Asignarle una imagen de fondo por CSS al `div`
 *  1.c- Asignarle las coordenadas como posición del background
 *  1.d- Asignarle alto y ancho al `div`
 *  1.d- Añadir el `div` con el fondo al HTML
 *
 * 2- Ejecuta un `cards.forEach` y ejecuta `mostrarCarta` para cada carta,
 * de forma que se pinten TODAS las cartas en el HTML
 *
 * 3- Borrar el `console.log` de abajo
 */
function mostrarCarta() {}

// coleccion, cordenada, getDisCordenate
console.log(
  cards.map((card) => ({
    color: card.getColor(),
    symbol: card.getSymbol(),
    coords: card.getPicCoords()
  }))
);
