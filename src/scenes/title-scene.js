/* eslint-disable import/prefer-default-export, no-undef */
import background from '../assets/backgrounds/background.jpg';
import cokecan from '../assets/cokecan.png';

export class TitleScene extends Phaser.Scene {
  preload() {
    this.load.image('title-background', background);
    this.load.image('cokecan', cokecan);
  }

  create() {
    this.add.image(0, 0, 'title-background');
    this.add.image(500, 500, 'cokecan');
  }
}