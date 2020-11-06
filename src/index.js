import * as Phaser from 'phaser';
import TitleScene from './scenes/title-scene';
import GameScene from './scenes/game-scene';
import GameOverScene from './scenes/gameover-scene';
import BootScene from './scenes/boot-scene';
import PreloaderScene from './scenes/preloader';
import ScoreBoardScene from './scenes/scoreboard-scene';
import gameConfig from './config/gameconfig';

import './css/styles.css';
import ApiComms from './scoreAPI/api-comms';

const apiLink = new ApiComms();

const game = new Phaser.Game(gameConfig);
game.globals = { score: 0, username: '', apiLink };
game.scene.add('Boot', BootScene);
game.scene.add('Preload', PreloaderScene);
game.scene.add('Title', TitleScene);
game.scene.add('GameOver', GameOverScene);
game.scene.add('ScoreBoard', ScoreBoardScene);
game.scene.add('Game', GameScene);
game.scene.start('Boot');