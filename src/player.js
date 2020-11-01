import dino1 from './assets/character/dino/run1.png';
import dino2 from './assets/character/dino/run2.png';
import dino3 from './assets/character/dino/run3.png';
import dino4 from './assets/character/dino/run4.png';
import dino5 from './assets/character/dino/run5.png';
import dino6 from './assets/character/dino/run6.png';
import dino7 from './assets/character/dino/run7.png';
import dino8 from './assets/character/dino/run8.png';

export default class Character {
  static dinoRunPreload(obj) {
    obj.load.image('run1', dino1);
    obj.load.image('run2', dino2);
    obj.load.image('run3', dino3);
    obj.load.image('run4', dino4);
    obj.load.image('run5', dino5);
    obj.load.image('run6', dino6);
    obj.load.image('run7', dino7);
    obj.load.image('run8', dino8);
  }

  static dinoRunAnimation(obj) {
    obj.anims.create({
      key: 'run',
      frames: [
        { key: 'run1', frame: null },
        { key: 'run2', frame: null },
        { key: 'run3', frame: null },
        { key: 'run4', frame: null },
        { key: 'run5', frame: null },
        { key: 'run6', frame: null },
        { key: 'run7', frame: null },
        { key: 'run8', frame: null },
      ],
      repeat: -1,
      frameRate: 8,
    });
  }
}