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
    // Creates the background on the screen
    this.add.image(500, 300, 'main-background');

    // Creates the intial logn platform for the begining of the game
    this.activePlatforms.push(this.physics.add.sprite(gameConfig.width - 200, gameConfig.height - 50, 'platform'));
    // Makes the platform solid
    this.activePlatforms[0].body.immovable = true;
    // Gives it a speed to move from left to right
    this.activePlatforms[0].body.setVelocityX(gameOptions.platformStartSpeed * -1);

    // Creates 2 more ramdom platforms
    for (let i = 1; i < 3; i += 1) {
      this.createPlatform();
    }

    // Creates The running animation
    Character.dinoRunAnimation(this);

    // Adds the animation to the screen
    this.player = this.physics.add.sprite(gameOptions.playerStartPosition, gameConfig.height / 2, 'run1');
    // Scales the character to fit the screen
    this.player.setScale(0.3);
    // Starts playing the animation
    this.player.play('run');
    // Gives the character a gravity to be pulled down
    this.player.setGravityY(gameOptions.playerGravity);
    // Gives the character the same speed of the platforms but in opposite direction
    // so it is not dragged by the platforms
    this.player.body.setVelocityX(gameOptions.platformStartSpeed);

    // Makes a collision between the character and the platforms
    this.physics.add.collider(this.player, this.activePlatforms);

    // Adding events to interact with the character
    this.input.keyboard.on('keydown-UP', this.jump, this);
    this.input.on('pointerdown', this.jump, this);

    // Sets the jumps to 0 for the double jump
    this.jumps = 0;
    this.score = 0;
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.x -= 3;
    } else if (this.cursors.right.isDown) {
      this.player.x += 3;
    }

    if (this.player.body.touching.down) {
      this.player.body.setVelocityX(gameOptions.platformStartSpeed);
      this.jumps = 0;
    } else {
      this.player.body.setVelocityX(0);
    }

    if (this.activePlatforms[0].x < (this.activePlatforms[0].width / 2) * -1) {
      this.activePlatforms[0].destroy();
      this.activePlatforms.shift();
      this.createPlatform();
    }

    this.score += 1;
    console.log(this.score);
  }

  jump() {
    if (this.player.body.touching.down || this.jumps < 2) {
      this.player.setVelocityY(gameOptions.jumpForce * -1);
      this.jumps += 1;
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