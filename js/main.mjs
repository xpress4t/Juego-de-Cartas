import { cardSize } from './constants.mjs';

console.log(cardSize);

(() => {
  const root = document.getElementById('root');

  setTimeout(() => {
    root.innerHTML += '<p>Probando</p>';
  }, 3000);
})();
