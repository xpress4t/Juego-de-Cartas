import { cards } from '../collections.mjs';
import { names } from '../constants.mjs';
import { renderGameScreen, renderLoginScreen } from '../screens/index.mjs';
import { getCardId, showCard } from '../utils.mjs';
import { Game } from './Game.mjs';
import { Player } from './Player.mjs';

export function Display() {
  let game;

  this.renderLoginScreen = (bots = 3, score = 250) => {
    renderLoginScreen(bots, score);

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = event.target.username.value;
        const bots = event.target.bots.value;
        const score = event.target.score.value;

        console.log({ name, bots, score });

        const players = [new Player(name, true)];
        for (let i = 0; i < bots; i++) {
          players.push(new Player(names[i]));
        }

        game = new Game(players, cards);
        game.init();
        window.game = game;

        this.renderGameScreen();
      });
    }
  };

  /**
   *
   * @param {string} cardId
   */
  const playCard = (cardId) => {
    console.log('Has hecho click en ', cardId);
  };

  const updatePlayerCards = () => {
    const mountPoint = document.getElementById('playerCards');

    Array.from(mountPoint.childNodes).forEach((element) => {
      element.removeEventListener('click', playCard);
    });
    mountPoint.innerHTML = '';

    game
      .getActivePlayer()
      .getCards()
      .forEach((card) => {
        const id = getCardId(card);
        showCard(card, mountPoint);
        document
          .getElementById(id)
          .addEventListener('click', (event) => playCard(event.target.id));
      });
  };

  this.renderGameScreen = () => {
    const playerName = game.getHumanPlayer().getName();

    renderGameScreen(playerName, game.getPlayers().length);
    updatePlayerCards();

    document.getElementById('drawCard').addEventListener('click', (event) => {
      game.getActivePlayer().drawCard(game.drawCard());
      updatePlayerCards();
    });
  };
}
