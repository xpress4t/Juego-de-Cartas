const htmlCode = `<div class="App GameScreen">
  <div class="Board">
    <div class="Square PlayedCards">
      <div class="Square Card PlayedCards__Card"></div>
    </div>

    <div class="Square Deck">
      <div class="Square Card"></div>
    </div>

    <!-- Cards de jugadores -->

    <!-- ARRIBA -->
    <div class="Square PlayerCards PlayerCards--top">
    </div>

    <!-- DERECHA -->
    <div class="Square PlayerCards PlayerCards--right">
    </div>

    <!-- ABAJO -->
    <div class="Square PlayerCards PlayerCards--bottom">
    <h3 class="PlayerName"></h3>
    </div>

    <!-- IZQUIERDA -->
    <div class="Square PlayerCards PlayerCards--left">
    </div>
  </div>

  <div class="Sidebar">
    <div class="Square History">
      <h3>Historial</h3>
    </div>

    <div class="Square Time">Tiempo de juego</div>
  </div>
</div>
`;

export const renderGame = () => {
  const root = document.querySelector("#root");
  root.innerHTML = htmlCode;
};