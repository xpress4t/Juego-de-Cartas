import { cards } from "./collections.mjs";
import { Game } from "./constructors/Game.mjs";
import { Player } from "./constructors/Player.mjs";
import { showCard } from "./utils.mjs";

const emma = new Player("Emmanuel", true);
const clara = new Player("Clarivel");

const game = new Game([emma, clara], cards);
game.init();

// showCard(gameCards[0]);
// game.getCards().forEach(showCard);
emma.getCards().forEach(showCard);
emma.isHuman();

// Testing the nextPlayer and previousPlayer functions
game.finishTurn();
console.log(game.getActivePlayer().getName());
