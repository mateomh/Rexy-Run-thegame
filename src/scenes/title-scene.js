/* eslint-disable import/prefer-default-export, no-undef */
import gameConfig from '../config/gameconfig';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    const logo = this.add.image((gameConfig.width / 2), (gameConfig.height / 2) - 50, 'mainlogo');
    logo.setScale(0.5);

    const playbtn = this.add.sprite((gameConfig.width / 2), gameConfig.height - 100, 'play');
    playbtn.setScale(0.4);
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
    this.scene.start('Game');
  }
}