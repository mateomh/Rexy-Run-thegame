/* eslint-disable  */
import * as Phaser from 'phaser';
import TitleScene from './scenes/title-scene';
import GameScene from './scenes/game-scene';
import GameOverScene from './scenes/gameover-scene';
import BootScene from './scenes/boot-scene';
import PreloaderScene from './scenes/preloader';
import gameConfig from './config/gameconfig';

let game = new Phaser.Game(gameConfig);
// game.score = 0;
game.globals = { score: 0 };
game.scene.add('Boot', BootScene);
game.scene.add('Preload', PreloaderScene);
game.scene.add('Title', TitleScene);
game.scene.add('GameOver', GameOverScene);
game.scene.add('Game', GameScene);
game.scene.start('Boot');