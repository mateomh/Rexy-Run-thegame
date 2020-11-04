import * as Phaser from 'phaser';
import GameOverScene from '../../src/scenes/boot-scene';

test('1. Test game over scene inheritance from phaser ', () => {
  const testScene = new GameOverScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});