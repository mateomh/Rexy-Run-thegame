/* eslint-disable import/prefer-default-export, no-undef */
import cokecan from '../assets/cokecan.png';

export default class SimpleScene extends Phaser.Scene {
  preload() {
    // this.load.image('cokecan', 'assets/cokecan.png');
    this.load.image('cokecan', cokecan);
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.add.image(100, 200, 'cokecan');
  }
}