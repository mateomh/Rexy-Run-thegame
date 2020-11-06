import * as Phaser from 'phaser';
import ScoreBoardScene from '../../src/scenes/boot-scene';
import gameConfig from '../../src/config/gameconfig';

const game = new Phaser.Game(gameConfig);

test('1. Test score board scene inheritance from phaser ', () => {
  const testScene = new ScoreBoardScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});

test('2. Test if the scene was added to the game', () => {
  game.scene.add('Preload', ScoreBoardScene);
  expect(game.scene.getScenes.length).toBe(2);
});