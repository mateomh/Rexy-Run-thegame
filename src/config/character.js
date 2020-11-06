import run1 from '../assets/character/dino/run1.png';
import run2 from '../assets/character/dino/run2.png';
import run3 from '../assets/character/dino/run3.png';
import run4 from '../assets/character/dino/run4.png';
import run5 from '../assets/character/dino/run5.png';
import run6 from '../assets/character/dino/run6.png';
import run7 from '../assets/character/dino/run7.png';
import run8 from '../assets/character/dino/run8.png';
import walk1 from '../assets/character/dino/walk1.png';
import walk2 from '../assets/character/dino/walk2.png';
import walk3 from '../assets/character/dino/walk3.png';
import walk4 from '../assets/character/dino/walk4.png';
import walk5 from '../assets/character/dino/walk5.png';
import walk6 from '../assets/character/dino/walk6.png';
import walk7 from '../assets/character/dino/walk7.png';
import walk8 from '../assets/character/dino/walk8.png';
import walk9 from '../assets/character/dino/walk9.png';
import walk10 from '../assets/character/dino/walk10.png';

export default class Character {
  static dinoRunPreload(obj) {
    obj.load.image('run1', run1);
    obj.load.image('run2', run2);
    obj.load.image('run3', run3);
    obj.load.image('run4', run4);
    obj.load.image('run5', run5);
    obj.load.image('run6', run6);
    obj.load.image('run7', run7);
    obj.load.image('run8', run8);
  }

  static dinoWalkPreload(obj) {
    obj.load.image('walk1', walk1);
    obj.load.image('walk2', walk2);
    obj.load.image('walk3', walk3);
    obj.load.image('walk4', walk4);
    obj.load.image('walk5', walk5);
    obj.load.image('walk6', walk6);
    obj.load.image('walk7', walk7);
    obj.load.image('walk8', walk8);
    obj.load.image('walk9', walk9);
    obj.load.image('walk10', walk10);
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

  static dinoWalkAnimation(obj) {
    obj.anims.create({
      key: 'walk',
      frames: [
        { key: 'walk1', frame: null },
        { key: 'walk2', frame: null },
        { key: 'walk3', frame: null },
        { key: 'walk4', frame: null },
        { key: 'walk5', frame: null },
        { key: 'walk6', frame: null },
        { key: 'walk7', frame: null },
        { key: 'walk8', frame: null },
        { key: 'walk9', frame: null },
        { key: 'walk10', frame: null },
      ],
      repeat: -1,
      frameRate: 10,
    });
  }
}