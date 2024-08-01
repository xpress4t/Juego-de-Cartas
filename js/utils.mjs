import { cardSize } from './constants.mjs';
import { Card } from './constructors/Card.mjs';

/**
 * @param {Card} card
 * @returns {string}
 */
export const getCardId = (card) => `${card.getSymbol()}-${card.getColor()}`;

/**
 * @param {Card} card
 */
export function showCard(card, mountPoint = document.querySelector('#root')) {
  const coords = card.getPicCoords();

  const createdDiv = document.createElement('div');
  createdDiv.classList.add('Cards__Card');
  createdDiv.style.backgroundImage = "url('/assets/cardsIllustration.png')";
  createdDiv.style.backgroundPositionX = `${coords.x}px`;
  createdDiv.style.backgroundPositionY = `${coords.y}px`;
  createdDiv.style.width = `${cardSize.width}px`;
  createdDiv.style.height = `${cardSize.height}px`;
  createdDiv.id = getCardId(card);

  mountPoint.appendChild(createdDiv);
}
