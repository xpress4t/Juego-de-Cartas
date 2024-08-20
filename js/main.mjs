import { cards } from "./collections.mjs";
import { Game } from "./constructors/Game.mjs";
import { Player } from "./constructors/Player.mjs";
import { showCard } from "./utils.mjs";

const emma = new Player("Emmanuel", true);
const clara = new Player("Clarivel");

const game = new Game([emma, clara], cards);
game.init();
