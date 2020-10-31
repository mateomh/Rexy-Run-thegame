/* eslint-disable  */
import * as Phaser from 'phaser';
import { SimpleScene } from './scenes/simple-scene';
import { TitleScene } from './scenes/title-scene';
import gameConfig from './config/gameconfig';

let game = new Phaser.Game(gameConfig);
game.scene.add('Title', TitleScene);
game.scene.start('Title');