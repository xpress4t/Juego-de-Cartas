import { setNumberBot, setPlayerName, setScore } from "../../state/root.mjs";
import { renderGame } from "./renderGame.mjs";

const htmlCode = `<div class="App LoginScreen">
<div class="Form">
  <div class="Form__Description">login</div>

  <form novalidate>
    <div class="FormControl">
      <label class="FormControl__Label" for="name">Nombre jugador:</label>
      <input
        class="FormControl__Input"
        type="text"
        name="playerName"
        autofocus
        required
        placeholder="Escribe tu nombre"
      />
    </div>

    <div class="FormControl">
      <label class="FormControl__Label" for="bots">Número de Bots:</label>
      <input
        class="FormControl__Input"
        type="number"
        name="numberBots"
        min="1"
        max="8"
      />
    </div>

    <div class="FormControl">
      <label class="FormControl__Label" for="puntos"
        >Puntos para ganar:</label
      >
      <input
        class="FormControl__Input"
        type="number"
        name="score"
        min="1"
        max="1000"
      />
    </div>

    <div class="Form__Submit">
      <button class="Button" type="submit">login</button>
    </div>
  </form>
</div>
</div>
`;

const onSubmit = (event) => {
  event.preventDefault();

  const playerName = event.target.elements.playerName.value;
  const numberBots = event.target.elements.numberBots.value;
  const score = event.target.elements.score.value;

  setPlayerName(playerName);
  setNumberBot(numberBots);
  setScore(score);

  renderGame();
};

export const renderLogin = (playerName = "", numberBots = 1, score = 250) => {
  const root = document.querySelector("#root");
  root.innerHTML = htmlCode;

  const loginForm = document.querySelector("form");
  loginForm.elements.playerName.value = playerName;
  loginForm.elements.numberBots.value = numberBots;
  loginForm.elements.score.value = score;

  loginForm.onsubmit = onSubmit;
};
