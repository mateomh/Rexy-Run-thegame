/* eslint-disable  */
import * as Phaser from 'phaser';
import { TitleScene } from './scenes/title-scene';
import { GameScene } from './scenes/game-scene';
import gameConfig from './config/gameconfig';

let game = new Phaser.Game(gameConfig);
game.scene.add('Title', TitleScene);
game.scene.add('Game', GameScene);
game.scene.start('Game');