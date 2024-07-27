import { cards } from "./collections.mjs";
import { Game } from "./constructors/Game.mjs";
import { Player } from "./constructors/Player.mjs";
import { showCard } from "./utils.mjs";

// Constructor para jugador
// TODO: Añadir las cartas negras manualmente (+4 y cambia color)

const emma = new Player("Emmanuel");
const clara = new Player("Clarivel");

const game = new Game([emma, clara], cards);

game.getCards().forEach(showCard);

