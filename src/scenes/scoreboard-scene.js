import * as Phaser from 'phaser';
import gameConfig from '../config/gameconfig';

export default class ScoreBoardScene extends Phaser.Scene {
  async create() {
    const midpoint = (gameConfig.width / 8);

    const fontOptions = {
      fontSize: '50px',
      fontStyle: 'bolder',
      fill: '#bc6ff1',
      align: 'center',
      strokeThickness: 10,
      stroke: '#892cdc',
    };
    const titleText = this.add.text(0, (gameConfig.height / 8), 'LOADING SCORES.....', fontOptions);
    titleText.x = midpoint;

    const top = await this.getTopScores();

    fontOptions.fill = '#28abb9';
    fontOptions.stroke = '#2d6187';

    for (let i = 0; i < top.length; i += 1) {
      const { score, user } = top[i];
      const scoreText = this.add.text(0, (gameConfig.height / 8) * (i + 2), `${i + 1}. ${user}  ${score}`, fontOptions);
      scoreText.x = midpoint;
    }

    titleText.text = 'HIGH SCORES';

    const backbtn = this.add.sprite((gameConfig.width / 8) * 7, (gameConfig.height / 3), 'back');
    backbtn.setScale(0.5);
    backbtn.setInteractive();

    backbtn.on('pointerdown', this.backClick.bind(this));
    backbtn.on('pointerover', () => {
      backbtn.setTexture('back2');
    });
    backbtn.on('pointerout', () => {
      backbtn.setTexture('back');
    });

    const homebtn = this.add.sprite((gameConfig.width / 8) * 7, (gameConfig.height / 3) * 2, 'home');
    homebtn.setScale(0.5);
    homebtn.setInteractive();

    homebtn.on('pointerdown', this.homeClick.bind(this));
    homebtn.on('pointerover', () => {
      homebtn.setTexture('home2');
    });
    homebtn.on('pointerout', () => {
      homebtn.setTexture('home');
    });
  }

  async getTopScores() {
    const apiConn = this.sys.game.globals.apiLink;
    const scores = await apiConn.getScores();
    const points = scores.map(item => item.score);
    let leaderLength = 5;
    const top5 = [];

    if (scores.length < leaderLength) {
      leaderLength = scores.length;
    }

    for (let i = 0; i < leaderLength; i += 1) {
      const max = Math.max(...points);
      const maxindex = points.indexOf(max);
      top5.push(scores[maxindex]);
      scores.splice(maxindex, 1);
      points.splice(maxindex, 1);
    }

    return top5;
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
}