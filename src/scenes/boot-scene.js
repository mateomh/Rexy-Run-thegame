import * as Phaser from 'phaser';
import Character from '../config/character';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    Character.dinoWalkPreload(this);
  }

  create() {
    this.scene.start('Preload');
  }
}