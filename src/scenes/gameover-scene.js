/* eslint-disable import/prefer-default-export, no-undef */

import gameoverLogo from '../assets/logos/gameover.png';

export class GameOverScene extends Phaser.Scene {
  preload() {
    this.load.image('gameover', gameoverLogo);
  }

  create() {
    const img = this.add.image((this.game.config.width / 2), (this.game.config.height / 2) - 100, 'gameover');
    img.setScale(0.5);
    const fontOptions = {
      fontSize: '50px',
      fontStyle: 'bolder',
      fill: '#d2e603',
      align: 'center',
      strokeThickness: 10,
      stroke: '#81b214',
    };
    this.gameText = this.add.text(300, 450, `Your Score: ${this.sys.game.globals.score}`, fontOptions);
  }
}