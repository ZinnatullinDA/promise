import GameSavingLoader from '../GameSavingLoader'
import GameSaving from '../GameSaving';
import json from '../parser';
import read from '../reader';

jest.mock('../reader');
jest.mock('../parser');


test('loads GameSaving', () => {
  const buffer = new ArrayBuffer(4);
  read.mockResolvedValue(buffer);
  const jsonStr='{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  json.mockResolvedValue(jsonStr);

  return GameSavingLoader.load().then((saving)=>{
    expect(saving).toBeInstanceOf(GameSaving);
    expect(saving.id).toBe(9);
  });
});

test('read fails', () => {
  read.mockRejectedValue(new Error('fail'));
  return GameSavingLoader.load().catch((e)=>{
    expect(e).toEqual(new Error('fail'));
  });
});
