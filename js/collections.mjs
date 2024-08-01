import { color, symbols } from './constants.mjs';
import { Card } from './constructors/Card.mjs';

const colors = [color.red, color.yellow, color.green, color.blue];

export const cards = [];

colors.forEach((color, index) => {
  cards.push(
    new Card(symbols.one, color, 1, 1, index),
    new Card(symbols.one, color, 1, 1, index),
    new Card(symbols.two, color, 2, 2, index),
    new Card(symbols.two, color, 2, 2, index),
    new Card(symbols.three, color, 3, 3, index),
    new Card(symbols.three, color, 3, 3, index),
    new Card(symbols.four, color, 4, 4, index),
    new Card(symbols.four, color, 4, 4, index),
    new Card(symbols.five, color, 5, 5, index),
    new Card(symbols.five, color, 5, 5, index),
    new Card(symbols.six, color, 6, 6, index),
    new Card(symbols.six, color, 6, 6, index),
    new Card(symbols.seven, color, 7, 7, index),
    new Card(symbols.seven, color, 7, 7, index),
    new Card(symbols.eight, color, 8, 8, index),
    new Card(symbols.eight, color, 8, 8, index),
    new Card(symbols.nine, color, 9, 9, index),
    new Card(symbols.nine, color, 9, 9, index),
    new Card(symbols.forbidden, color, 9, 10, index),
    new Card(symbols.forbidden, color, 9, 10, index),
    new Card(symbols.reverse, color, 9, 11, index),
    new Card(symbols.reverse, color, 9, 11, index),
    new Card(symbols.take2, color, 9, 12, index),
    new Card(symbols.take2, color, 9, 12, index)
  );
});

for (let i = 0; i < 4; i++) {
  cards.push(new Card(symbols.take4, color.black, 4, 13, 4));
}
for (let j = 0; j < 4; j++) {
  cards.push(new Card(symbols.changeColor, color.black, 4, 13, 0));
}
