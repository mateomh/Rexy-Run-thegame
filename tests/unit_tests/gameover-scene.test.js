import * as Phaser from 'phaser';
import GameOverScene from '../../src/scenes/boot-scene';
import gameConfig from '../../src/config/gameconfig';

const game = new Phaser.Game(gameConfig);

test('1. Test game over scene inheritance from phaser ', () => {
  const testScene = new GameOverScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});

test('2. Test if the scene was added to the game', () => {
  game.scene.add('Preload', GameOverScene);
  expect(game.scene.getScenes.length).toBe(2);
});