let playerName;
let numberBots;
let score;

export const getPlayerName = () => playerName;
export const setPlayerName = (newPlayerName) => {
  playerName = newPlayerName;
};

export const getNumberBot = () => numberBots;
export const setNumberBot = (newNumberBots) => {
  numberBots = newNumberBots;
};

export const getScore = () => score;
export const setScore = (newScore) => {
  score = newScore;
};

export const getState = () => ({
  playerName: getPlayerName(),
  numberBots: getNumberBot(),
  score: getScore(),
});
