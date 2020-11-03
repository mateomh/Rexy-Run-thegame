/* eslint-disable import/prefer-default-export, no-undef */
import gameConfig from '../config/gameconfig';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    const userInput = document.getElementById('username');
    userInput.classList.toggle('hide');
    const logoScale = 0.65;
    const logo = this.add.image((680 * logoScale) / 1.5, (gameConfig.height / 2), 'mainlogo');
    logo.setScale(logoScale);

    const playbtn = this.add.sprite((gameConfig.width / 4) * 3 + 50, (gameConfig.height / 4) * 3, 'play');
    playbtn.setScale(1);
    playbtn.setInteractive();

    playbtn.on('pointerdown', this.playClick.bind(this));

    playbtn.on('pointerover', () => {
      playbtn.setTexture('play2');
    });

    playbtn.on('pointerout', () => {
      playbtn.setTexture('play');
    });
  }

  playClick() {
    const userInput = document.getElementById('username');
    if (userInput.value === '') return;
    this.sys.game.globals.username = userInput.value;
    userInput.classList.toggle('hide');
    this.scene.start('Game');
  }
}