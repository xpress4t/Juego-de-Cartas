export const renderGameScreen = (playerName = '', playerCount = 0) => {
  document.getElementById('root').innerHTML = `
    <div class="GameScreen">
      <p>Partida de ${playerName} con ${playerCount} jugadores</p>
      <button id="drawCard">Robar carta</button>
      <div id="playerCards" class="GameScreen__Cards Cards"></div>
    </div>
  `;
};
