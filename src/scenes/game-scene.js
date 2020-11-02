/* eslint-disable import/prefer-default-export, no-undef */
import background from '../assets/background/forest.png';
import platform from '../assets/platforms/initial.png';
import smallp from '../assets/platforms/small.png';
import mediump from '../assets/platforms/medium.png';
import largep from '../assets/platforms/large.png';
import xlp from '../assets/platforms/extralarge.png';
import gameOptions from '../config/gameoptions';
import gameConfig from '../config/gameconfig';
import Character from '../config/character';


export class GameScene extends Phaser.Scene {
  preload() {
    this.load.image('main-background', background);
    this.load.image('platform', platform);
    this.myPlatforms = ['small', 'medium', 'large', 'extralarge'];
    this.myPlatformsWidths = [233, 385, 516, 641];
    this.load.image('small', smallp);
    this.load.image('medium', mediump);
    this.load.image('large', largep);
    this.load.image('extralarge', xlp);

    this.activePlatforms = [];

    Character.dinoRunPreload(this);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.add.image(500, 300, 'main-background');

    this.activePlatforms.push(this.physics.add.sprite(gameConfig.width - 200, gameConfig.height - 50, 'platform'));
    this.activePlatforms[0].body.immovable = true;
    this.activePlatforms[0].body.setVelocityX(gameOptions.platformStartSpeed * -1);

    for (let i = 1; i < 3; i += 1) {
      this.createPlatform();
    }

    Character.dinoRunAnimation(this);

    this.player = this.physics.add.sprite(gameOptions.playerStartPosition, gameConfig.height / 2, 'run1');
    this.player.setScale(0.3);
    this.player.play('run');
    this.player.setGravityY(gameOptions.playerGravity);
    this.player.body.setVelocityX(gameOptions.platformStartSpeed);

    this.physics.add.collider(this.player, this.activePlatforms);
  }

  update() {
    // const cam = this.cameras.main;
    if (this.cursors.left.isDown) {
      // cam.scrollX -= 3;
      this.player.x -= 3;
    } else if (this.cursors.right.isDown) {
      // cam.scrollX += 3;
      this.player.x += 3;
    } else if (this.cursors.up.isDown) {
      this.jump();
    }

    if (this.player.body.touching.down) {
      this.player.body.setVelocityX(gameOptions.platformStartSpeed);
    } else {
      this.player.body.setVelocityX(0);
    }

    if (this.activePlatforms[0].x < (this.activePlatforms[0].width / 2) * -1) {
      this.activePlatforms[0].destroy();
      this.activePlatforms.shift();
      this.createPlatform();
    }
  }

  jump() {
    if (this.player.body.touching.down) {
      this.player.setVelocityY(gameOptions.jumpForce * -1);
    }
  }

  createPlatform() {
    const platformIndex = Phaser.Math.Between(0, this.myPlatforms.length - 1);
    const nextplatform = this.myPlatforms[platformIndex];
    const nextWidth = this.myPlatformsWidths[platformIndex];
    const gap = Phaser.Math.Between(gameOptions.minGap, gameOptions.maxGap);
    const spawnPoint = this.activePlatforms[this.activePlatforms.length - 1].x + (this.activePlatforms[this.activePlatforms.length - 1].width / 2) + gap + (nextWidth / 2);
    const temp = this.physics.add.sprite(spawnPoint, gameConfig.height - 50, nextplatform);
    temp.body.immovable = true;
    temp.setVelocityX(gameOptions.platformStartSpeed * -1);
    this.activePlatforms.push(temp);
  }
}