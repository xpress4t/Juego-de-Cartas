/**
 * @param {number} bots Number of PC players
 * @param {number} score Required score to win the game
 */
export const renderLoginScreen = (bots = 3, score = 250) => {
  document.getElementById('root').innerHTML = `
    <div class="LoginScreen">
      <form class="LoginScreen__Form" id="loginForm">
        <label class="TextInput" for="username">
          <span class="TextInput__Label">Nombre de usuario</span>
          <input class="TextInput__Field" id="username" type="text">
        </label>

        <label class="TextInput" for="bots">
          <span class="TextInput__Label">Bots quantity</span>
          <input class="TextInput__Field" id="bots" type="number" value="${bots}">
        </label>

        <label class="TextInput" for="score">
          <span class="TextInput__Label">Score to win</span>
          <input class="TextInput__Field" id="score" type="number" value="${score}">
        </label>

        <button class="Button" type="submit">
          Empezar
        </button>
      </form>
    </div>
  `;
};
