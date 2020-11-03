import * as Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  backgroundColor: 0x444444,

  // physics settings
  physics: {
    default: 'arcade',
  },
};