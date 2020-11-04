import * as Phaser from 'phaser';
import PreloaderScene from '../../src/scenes/preloader';

test('1. Test preloader scene inheritance from phaser ', () => {
  const testScene = new PreloaderScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});