import * as Phaser from 'phaser';
import TitleScene from '../../src/scenes/preloader';

test('1. Test title scene inheritance from phaser ', () => {
  const testScene = new TitleScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});