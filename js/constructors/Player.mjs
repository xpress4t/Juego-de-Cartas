import { Card } from "./Card.mjs";

/**
 *
 * @param {string} n Player's name
 */
export function Player(n) {
  const name = n;
  /**
   *
   * @returns {string}
   */
  this.getName = () => name;
  const score = 0;
  /**
   *
   * @returns {number}
   */
  this.getScore = () => score;
  const cards = [];
  /**
   *
   * @returns {Array.<Card>}
   */
  this.getCards = () => cards;
}
