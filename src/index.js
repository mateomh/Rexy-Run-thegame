/* eslint-disable  */
import * as Phaser from 'phaser';
import { SimpleScene } from './scenes/simple-scene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene,
};

let game = new Phaser.Game(gameConfig);