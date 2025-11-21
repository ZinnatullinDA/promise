import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => console.log('Loaded:', saving),
  (error) => console.error(error),
);
