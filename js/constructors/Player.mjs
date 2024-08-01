import { Card } from "./Card.mjs";

/**
 * @param {string} n Player's name
 * @param {boolean} h Define whether the player is human or not
 */
export function Player(n = "", h = false) {
  const name = n;
  /**
   * @returns {string}
   */
  this.getName = () => name;
  const score = 0;
  /**
   * @returns {number}
   */
  this.getScore = () => score;
  const cards = [];
  /**
   * @returns {Array.<Card>}
   */
  this.getCards = () => cards;
  /**
   * @param {Card} card Carta que el jugador está robando
   */
  this.drawCard = (card) => {
    if (card) {
      cards.push(card);
    }
  };

  const human = h;
  /**
   * @returns {boolean}
   */
  this.isHuman = () => human;
}
