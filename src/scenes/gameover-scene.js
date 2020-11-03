/* eslint-disable import/prefer-default-export, no-undef */

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    const backbtn = this.add.sprite(80, 80, 'back');
    backbtn.setScale(0.4);
    backbtn.setInteractive();

    backbtn.on('pointerdown', this.backClick.bind(this));
    backbtn.on('pointerover', () => {
      backbtn.setTexture('back2');
    });
    backbtn.on('pointerout', () => {
      backbtn.setTexture('back');
    });

    const logo = this.add.image((this.game.config.width / 2), (this.game.config.height / 2) - 100, 'gameover');
    logo.setScale(0.5);
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

  backClick() {
    this.scene.start('Game');
  }
}