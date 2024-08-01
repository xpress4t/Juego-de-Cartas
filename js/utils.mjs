import { cardSize } from "./constants.mjs";
import { Card } from "./constructors/Card.mjs";

/**
 * @param {Card} card
 */
export function showCard(card) {
  const coords = card.getPicCoords();

  const createdDiv = document.createElement("div");
  createdDiv.classList.add("card");
  createdDiv.style.backgroundImage = "url('/assets/cardsIllustration.png')";
  createdDiv.style.backgroundPositionX = `${coords.x}px`;
  createdDiv.style.backgroundPositionY = `${coords.y}px`;
  createdDiv.style.width = `${cardSize.width}px`;
  createdDiv.style.height = `${cardSize.height}px`;

  const root = document.querySelector("#root");
  root.appendChild(createdDiv);
}