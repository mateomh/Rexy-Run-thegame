/* eslint-disable import/prefer-default-export, no-undef */
import background from '../assets/backgrounds/forest.png';
import player from '../assets/character/dino/general.png';
import platform from '../assets/worlds/field/platforms/platform2.png';
import gameOptions from '../config/gameoptions';
import gameConfig from '../config/gameconfig';
import Player from '../player';


export class GameScene extends Phaser.Scene {
  preload() {
    this.load.image('main-background', background);
    this.load.image('player', player);
    this.load.image('platform', platform);

    const dino = new Player();
    dino.makePreload(this);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.add.image(500, 300, 'main-background');

    this.platform = this.physics.add.sprite(400, gameConfig.height, 'platform');
    this.platform.body.immovable = true;
    this.platform.body.setVelocityX(gameOptions.platformStartSpeed * -0.5);

    const dino = new Player();
    dino.makeAnimation(this);

    this.player = this.physics.add.sprite(gameOptions.playerStartPosition, gameConfig.height / 2, 'run1');
    this.player.setScale(0.3);
    this.player.play('run');
    // this.player.setGravityY(gameOptions.playerGravity);
    // this.player.body.setVelocityX(gameOptions.platformStartSpeed * 0.5);

    this.physics.add.collider(this.player, this.platform);
    // this.add.tileSprite(500, 300, 1000, 600, 'main-background');
  }

  update() {
    const cam = this.cameras.main;
    if (this.cursors.left.isDown) {
      console.log('left');
      // cam.scrollX -= 3;
      this.player.x -= 3;
    } else if (this.cursors.right.isDown) {
      console.log('right');
      // cam.scrollX += 3;
      this.player.x += 3;
    } else if (this.cursors.up.isDown) {
      this.jump();
    }
  }

  jump() {
    if (this.player.body.touching.down) {
      this.player.setVelocityY(gameOptions.jumpForce * -1);
    }
  }
}