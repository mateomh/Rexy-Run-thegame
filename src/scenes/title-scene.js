/* eslint-disable import/prefer-default-export, no-undef */

export class TitleScene extends Phaser.Scene {
  preload() {
    // this.load.image('title-background', background);
  }

  create() {
    // this.add.image(0, 0, 'title-background');
    console.log(`your score: ${this.sys.game.globals.score}`);
  }
}