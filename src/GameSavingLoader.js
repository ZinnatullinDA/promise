import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((buffer) => json(buffer))
      .then((jsonString) => JSON.parse(jsonString))
      .then((data) => new GameSaving(data));
  }
}
