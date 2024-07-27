import { cardSize } from "../constants.mjs";

/**
 * @typedef {Object} Coordinates
 * @property {number} x - Card's X coordinate in background sprite
 * @property {number} y - Card's Y coordinate in background sprite
 */

/**
 *
 * @param {string} s Card's symbol
 * @param {string} c Card's color
 * @param {number} p Card's score
 * @param {number} x Card's X coordinate in background sprite
 * @param {number} y Card's Y coordinate in background sprite
 */
export function Card(s, c, p, x, y) {
  const symbol = s;
  /**
   * Returns the card's number or symbol
   *
   * @returns {string}
   */
  this.getSymbol = () => symbol;

  const color = c;
  /**
   * Returns the card's color
   *
   * @returns {string}
   */
  this.getColor = () => color;

  const score = p;
  /**
   * Return the card's score
   *
   * @returns {string}
   */
  this.getScore = () => score;

  const picX = x;
  const picY = y;

  /**
   * @returns {Coordinates}
   */
  this.getPicCoords = () => ({
    x: -(cardSize.width * picX - picX),
    y: -(cardSize.height * picY - picY / 2),
  });
}
