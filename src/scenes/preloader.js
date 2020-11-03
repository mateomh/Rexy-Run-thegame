import * as Phaser from 'phaser';
import mainlogo from '../assets/logos/main.png';
import playbtn from '../assets/buttons/play.png';
import Character from '../config/character';
import gameConfig from '../config/gameconfig';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    Character.dinoWalkAnimation(this);
    const logo = this.add.sprite(gameConfig.width / 2, gameConfig.height / 2, 'walk1');
    logo.play('walk');
    logo.setScale(0.8);

    this.load.image('mainlogo', mainlogo);
    this.load.image('play', playbtn);

    this.timedEvent = this.time.delayedCall(5000, this.ready, [], this);
  }

  ready() {
    this.scene.start('Title');
  }
}