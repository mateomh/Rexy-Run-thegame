import * as Phaser from 'phaser';
import PreloaderScene from '../../src/scenes/preloader';
import TitleScene from '../../src/scenes/title-scene';
import gameConfig from '../../src/config/gameconfig';

const game = new Phaser.Game(gameConfig);

test('1. Test preloader scene inheritance from phaser ', () => {
  const testScene = new PreloaderScene();
  expect(testScene instanceof Phaser.Scene).toBeTruthy();
});

test('2. Test if the scene was added to the game', () => {
  game.scene.add('Preload', PreloaderScene);
  expect(game.scene.getScenes.length).toBe(2);
});
