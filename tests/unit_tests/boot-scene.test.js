import * as Phaser from 'phaser';
import BootScene from '../../src/scenes/boot-scene';
import gameConfig from '../../src/config/gameconfig';

const game = new Phaser.Game(gameConfig);


test('1. Test boot scene inheritance from phaser ', () => {
  const testScene = new BootScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});

test('2. Test if the scene was added to the game', () => {
  game.scene.add('Boot', BootScene);
  expect(game.scene.getScenes.length).toBe(2);
});
