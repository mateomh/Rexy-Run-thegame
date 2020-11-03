import * as Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    const apiConn = this.sys.game.globals.apiLink;

    // apiConn.addScore(this.sys.game.globals.username, this.sys.game.globals.score);

    const backbtn = this.add.sprite((this.game.config.width / 8), (this.game.config.height / 4) * 3, 'back');
    backbtn.setScale(0.5);
    backbtn.setInteractive();

    backbtn.on('pointerdown', this.backClick.bind(this));
    backbtn.on('pointerover', () => {
      backbtn.setTexture('back2');
    });
    backbtn.on('pointerout', () => {
      backbtn.setTexture('back');
    });

    const homebtn = this.add.sprite((this.game.config.width / 8) * 2, (this.game.config.height / 4) * 3, 'home');
    homebtn.setScale(0.5);
    homebtn.setInteractive();

    homebtn.on('pointerdown', this.homeClick.bind(this));
    homebtn.on('pointerover', () => {
      homebtn.setTexture('home2');
    });
    homebtn.on('pointerout', () => {
      homebtn.setTexture('home');
    });

    const leaderbtn = this.add.sprite((this.game.config.width / 8) * 3, (this.game.config.height / 4) * 3, 'leader');
    leaderbtn.setScale(0.5);
    leaderbtn.setInteractive();

    leaderbtn.on('pointerdown', this.leaderClick.bind(this));
    leaderbtn.on('pointerover', () => {
      leaderbtn.setTexture('leader2');
    });
    leaderbtn.on('pointerout', () => {
      leaderbtn.setTexture('leader');
    });

    const logo = this.add.image((this.game.config.width / 4) * 3, (this.game.config.height / 2), 'gameover');
    logo.setScale(0.7);

    const fontOptions = {
      fontSize: '50px',
      fontStyle: 'bolder',
      fill: '#d2e603',
      align: 'center',
      strokeThickness: 10,
      stroke: '#81b214',
    };
    this.gameText = this.add.text(40, (this.game.config.height / 4), `Your Score: ${this.sys.game.globals.score}`, fontOptions);
  }

  backClick() {
    this.sys.game.globals.score = 0;
    this.scene.start('Game');
  }

  homeClick() {
    this.sys.game.globals.score = 0;
    this.sys.game.globals.username = '';
    this.scene.start('Title');
  }

  leaderClick(){

  }
}