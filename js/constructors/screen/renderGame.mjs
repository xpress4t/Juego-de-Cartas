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
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
    </div>

    <!-- DERECHA -->
    <div class="Square PlayerCards PlayerCards--right">
      <div class="Square Card PlayerCards__Card PlayerCards__Card--vertical"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--vertical"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--vertical"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--vertical"></div>
    </div>

    <!-- ABAJO -->
    <div class="Square PlayerCards PlayerCards--bottom">
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--horizontal"></div>
    </div>

    <!-- IZQUIERDA -->
    <div class="Square PlayerCards PlayerCards--left">
      <div class="Square Card PlayerCards__Card PlayerCards__Card--vertical"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--vertical"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--vertical"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--vertical"></div>
      <div class="Square Card PlayerCards__Card PlayerCards__Card--vertical"></div>
    </div>
  </div>

  <div class="Sidebar">
    <div class="Square History">
      <h3>Historial</h3>
      <p>Pepito jugó el 4 rojo</p>
      <p>Fulanito jugó un "Saltar turno" rojo</p>
    </div>

    <div class="Square Time">Tiempo de juego</div>
  </div>
</div>
`;

export const renderGame = () => {
  const root = document.querySelector("#root");
  root.innerHTML = htmlCode;
};