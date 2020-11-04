import * as Phaser from 'phaser';
import GameScene from '../../src/scenes/boot-scene';

test('1. Test game scene inheritance from phaser ', () => {
  const testScene = new GameScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});