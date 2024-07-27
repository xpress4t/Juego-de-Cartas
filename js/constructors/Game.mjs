import { cardSize } from "../constants.mjs";
import { Card } from "./Card.mjs";
import { Player } from "./Player.mjs";

/**
 *
 * @param {Array.<Player>} p Players
 * @param {Array.<Card>} c Cards
 */
export function Game(p, c) {
  const players = p;
  /**
   *
   * @returns {Array.<Player>}
   */
  this.getPlayers = () => players;

  const cards = [...c];
  /**
   *
   * @returns {Array.<Card>}
   */
  this.getCards = () => cards;

  const playedCards = [];
  /**
   *
   * @returns {Array.<Card>}
   */
  this.getPlayedCards = () => playedCards;

  const rounds = 0;
  /**
   *
   * @returns {number}
   */
  this.getRounds = () => rounds;
}

// shuffle
// draw card
// player draw card
// luego hacer que obtenga 7 cartas el jugador
