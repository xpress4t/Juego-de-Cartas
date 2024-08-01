import { Card } from "./Card.mjs";
import { Player } from "./Player.mjs";
/**
 * @param {Array.<Player>} p Players
 * @param {Array.<Card>} c Cards
 */
export function Game(p, c) {
  const players = p;
  /**
   * @returns {Array.<Player>}
   */
  this.getPlayers = () => players;

  const cards = [...c];
  /**
   * @returns {Array.<Card>}
   */
  this.getCards = () => cards;

  const playedCards = [];
  /**
   * @returns {Array.<Card>}
   */
  this.getPlayedCards = () => playedCards;

  const rounds = 0;
  /**
   * @returns {number}
   */
  this.getRounds = () => rounds;

  const shuffle = () => {
    let currentIndex = cards.length;

    // While there remain elements to shuffle
    while (currentIndex != 0) {
      // Pick a remaining element
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex],
        cards[currentIndex],
      ];
    }
  };

  let turn = 0;
  /**
   * @returns {Card}
   */
  this.drawCard = () => {
    if (cards.length == 0) {
      return undefined;
    }
    // Remove and return the top card from the deck
    const drawnCard = cards.pop();
    return drawnCard;
  };

  /**
   * Method that initializes the shuffling of cards and gives 7 to each player
   */
  this.init = () => {
    shuffle();
    for (let i = 0; i < 7; i++) {
      players.forEach((player) => {
        player.drawCard(this.drawCard());
      });
    }
  };

  /**
   * @returns {Player}
   */
  this.getActivePlayer = () => this.getPlayers()[turn];

  /**
   * Method to find a player who is human
   */
  this.getHumanPlayer = () => players.find((player) => player.isHuman());

  const nextPlayer = () => {
    const nextTurn = turn + 1;
    if (nextTurn > this.getPlayers().length - 1) {
      turn = 0;
    } else {
      turn = turn + 1;
    }
  };

  const previousPlayer = () => {
    if (turn === 0) {
      turn = this.getPlayers().length - 1;
    } else {
      turn = turn - 1;
    }
  };

  let clockWise = false;
  this.finishTurn = () => {
    if (clockWise) {
      previousPlayer();
    } else {
      nextPlayer();
    }
  };
}
