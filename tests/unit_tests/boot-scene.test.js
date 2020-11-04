import * as Phaser from 'phaser';
import BootScene from '../../src/scenes/boot-scene';

test('1. Test boot scene inheritance from phaser ', () => {
  const testScene = new BootScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});