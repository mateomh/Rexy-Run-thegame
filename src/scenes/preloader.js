import * as Phaser from 'phaser';
import Character from '../config/character';
import gameConfig from '../config/gameconfig';
import mainlogo from '../assets/logos/main.png';
import playbtn from '../assets/buttons/play.png';
import playbtn2 from '../assets/buttons/play2.png';
import backbtn from '../assets/buttons/back.png';
import backbtn2 from '../assets/buttons/back2.png';
import gameoverLogo from '../assets/logos/gameover.png';

import background from '../assets/background/forest.png';
import platform from '../assets/platforms/initial.png';
import smallp from '../assets/platforms/small.png';
import mediump from '../assets/platforms/medium.png';
import largep from '../assets/platforms/large.png';
import xlp from '../assets/platforms/extralarge.png';


export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    Character.dinoWalkAnimation(this);
    const logo = this.add.sprite(gameConfig.width / 2, gameConfig.height / 2, 'walk1');
    logo.play('walk');
    logo.setScale(0.8);

    // Logos
    this.load.image('mainlogo', mainlogo);
    this.load.image('gameover', gameoverLogo);

    // Buttons
    this.load.image('play', playbtn);
    this.load.image('play2', playbtn2);
    this.load.image('back', backbtn);
    this.load.image('back2', backbtn2);

    // Game images
    this.load.image('main-background', background);
    this.load.image('platform', platform);
    this.load.image('small', smallp);
    this.load.image('medium', mediump);
    this.load.image('large', largep);
    this.load.image('extralarge', xlp);
    Character.dinoRunPreload(this);

    this.timedEvent = this.time.delayedCall(5000, this.ready, [], this);
  }

  ready() {
    this.scene.start('Title');
  }
}