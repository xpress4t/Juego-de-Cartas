import { renderGame } from "./screen/renderGame.mjs";
import { renderLogin } from "./screen/renderLogin.mjs";

export function Display() {
  this.renderLogin = renderLogin;
  this.renderGame = renderGame;
}
