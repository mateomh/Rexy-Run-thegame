/* eslint-disable  */
import * as Phaser from 'phaser';
import TitleScene from './scenes/title-scene';
import GameScene from './scenes/game-scene';
import GameOverScene from './scenes/gameover-scene';
import BootScene from './scenes/boot-scene';
import PreloaderScene from './scenes/preloader';
import gameConfig from './config/gameconfig';

import css from './css/styles.css';

const header = document.getElementsByTagName('head')[0];
const styleSheet = document.createElement('link');

styleSheet.rel = 'stylesheet';
styleSheet.href = css;

header.appendChild(styleSheet);

let game = new Phaser.Game(gameConfig);
game.globals = { score: 0, username: '' };
game.scene.add('Boot', BootScene);
game.scene.add('Preload', PreloaderScene);
game.scene.add('Title', TitleScene);
game.scene.add('GameOver', GameOverScene);
game.scene.add('Game', GameScene);
game.scene.start('Boot');