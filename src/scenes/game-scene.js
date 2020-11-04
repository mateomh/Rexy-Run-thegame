/* eslint-disable no-undef, max-len */
import gameOptions from '../config/gameoptions';
import gameConfig from '../config/gameconfig';
import Character from '../config/character';


export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.myPlatforms = ['small', 'medium', 'large', 'extralarge'];
    this.myPlatformsWidths = [233, 385, 516, 641];
    this.activePlatforms = [];
    this.activeItems = [];
    this.cursors = this.input.keyboard.createCursorKeys();

    // Creates the background on the screen
    this.add.image(500, 300, 'main-background');

    // Creates the intial long platform for the begining of the game
    this.activePlatforms.push(this.physics.add.sprite(gameConfig.width - 200, gameConfig.height - 50, 'platform'));
    this.activePlatforms[0].body.immovable = true;
    this.activePlatforms[0].body.setVelocityX(gameOptions.platformStartSpeed * -1);

    // Creates 2 more ramdom platforms
    for (let i = 1; i < 3; i += 1) {
      this.createPlatform();
    }

    // Creates The running animation
    Character.dinoRunAnimation(this);

    // Adds the animation to the screen
    this.player = this.physics.add.sprite(gameOptions.playerStartPosition, gameConfig.height / 2, 'run1');
    this.player.setScale(0.3);
    this.player.play('run');
    this.player.setGravityY(gameOptions.playerGravity);
    // Gives the character the same speed of the platforms but in opposite direction
    // so it is not dragged by the platforms
    this.player.body.setVelocityX(gameOptions.platformStartSpeed);

    this.spawnItem();

    // Makes a collision between the character and the platforms
    this.physics.add.collider(this.player, this.activePlatforms);
    // makes an overlap event for when the player gets an item
    this.physics.add.overlap(this.player, this.activeItems, this.collectItem, null, this);

    // Adding events to interact with the character
    this.input.keyboard.on('keydown-UP', this.jump, this);
    this.input.on('pointerdown', this.jump, this);

    // Sets the jumps to 0 for the double jump
    this.jumps = 0;
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

    if (this.activeItems[0].x < 0) {
      this.activeItems[0].destroy();
      this.activeItems.shift();
      this.spawnItem();
    }

    this.sys.game.globals.score += 1;

    if (this.gameover()) {
      this.scene.stop('Game');
      this.scene.start('GameOver');
    }
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

  gameover() {
    if (this.player.y > gameConfig.height + (this.player.height / 2)) {
      return true;
    }

    return false;
  }

  spawnItem() {
    const x = Phaser.Math.Between(gameOptions.itemSpawnRangeX[0], gameOptions.itemSpawnRangeX[1]);
    const y = Phaser.Math.Between(gameOptions.itemSpawnRangeY[0], gameOptions.itemSpawnRangeY[1]);
    const tempItem = this.physics.add.sprite(x, y, 'item');
    tempItem.setScale(0.1);
    tempItem.body.setVelocityX(gameOptions.platformStartSpeed * -1);
    this.activeItems.push(tempItem);
  }

  collectItem() {
    this.sys.game.globals.score += 200;
    this.activeItems[0].destroy();
    this.activeItems.shift();
    this.spawnItem();
  }
}