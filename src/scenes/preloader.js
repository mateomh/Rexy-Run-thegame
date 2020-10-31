import * as Phaser from 'phaser';
import background from '../assets/backgrounds/background.jpg';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('title-background', background);
    this.scene.start('Title');
  }
}