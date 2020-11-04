import * as Phaser from 'phaser';
import ScoreBoardScene from '../../src/scenes/boot-scene';

test('1. Test score board scene inheritance from phaser ', () => {
  const testScene = new ScoreBoardScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});