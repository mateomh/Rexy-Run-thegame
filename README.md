![](https://img.shields.io/badge/Microverse-blueviolet)

# RUN REXY RUN The game

> This is a game where a hungry T-rex goes jumping from platform to platform looking for some fresh and delicious cherries to eat until the gap is too big and he can't reach the next platform.

![screenshot](./screenshots/title.png)

This game is a platformer made with the Phaser library as a Capstone Project for the JavaScript module from the Microverse technical curriculum.

## Built With

- JavaScript,
- Phaser,
- Webpack,
- Jest,
- API

## Live Demo

[Run Rexy Run demo](https://mateomh.github.io/Rexy-Run-thegame/)


# How to play

When you fire up the game, you are welcomed by a walking Rexy loading screen. After the loading finishes, you will see the main title screen.

![screenshot](./screenshots/title.png)

On this screen, you will have to enter your name so the game can start. If no name is entered the game will not start.

Then you will go into the game itself, where Rexy will start running on a long platform. To jump you can either use the up arrow on your keyboard or a mouse click.

![screenshot](./screenshots/gameplay.png)


To make it a little more fair to Rexy the game has the double jump functionality, so he can get to those further platforms that randomly show up. The double jump can be activated when Rexy is already in the air by hitting the jump action button again.

![screenshot](./src/assets/items/item1.png)

Through the game, you will find these delicious cherries that Rexy can eat. If you eat one of those you will get an extra 200 points added to your score, so try to eat as many as you can.

After Rexy falls into the abyss, you are taken to the game over scene, where you can see your score and some buttons.

![screenshot](./screenshots/gameoverscreen.png)

The buttons give the options: 
- To start over the game with the same player name.
- Go to the title screen where you can enter a new player name.
- See the scoreboard with the top 5 scores in the game.

![screenshot](./screenshots/scores.png)

You can check if you made it and if you are at the top of the board.

## Setup

To run the game locally you will need to follow several steps to make it work.

First, you have to check if you have **nodejs** installed on your machine. For this type the following command in your terminal:

> node -v

If **command not found** shows as a response, then go to [nodejs.org](https://nodejs.org/en/) and follow the instructions to install it. After completing the installation the same command should show you a version number.

Then clone the [repository](https://github.com/mateomh/Rexy-Run-thegame.git) into your local drive and open a terminal in the root folder of the project and install the necessary packages to make it work by running this command:

> npm install

This will get the project ready to run. After this compile the project just in case by running the following command:

> npm run build

Make sure you have a folder called **dist** in the root of the project so it doesn't throw any errors.

Next, you have to install some kind of server to run it in your browser. I recommend using the live server extension from Ritwick Dey for VSCode but something like [XAMPP](https://www.apachefriends.org/) can also be used.

Then start the server on the **index.html** file located in the **dist** folder and that is it, you are ready to go

## Tests

This project has a suite of tests built-in.

To run the tests clone the [repository](https://github.com/mateomh/Rexy-Run-thegame.git) into your local drive, if you haven't done so, and open a terminal in the root folder of the project and install the necessary packages to make it work by running this command:

> npm install

Then you can just run the following command and see the results

> npm test




## Authors

👤 **Mateo mojica**

- Github: [@mateomh](https://github.com/mateomh)
- Twitter: [@mateo_m_h](https://twitter.com/mateo_m_h)
- Linkedin: [Mateo mojica](https://linkedin.com/mateo_mojica_hernandez)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give an ⭐️ if you like this project!

## Acknowledgments

- Microverse
- GameArt2d.org
- Emanuele Feronato
- Photon Storm

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## Credits

All the assets in the game were taken from OpenGameArt.org and GameArt2d.com from the free section. A big thank you to the creator of these assets **Zuhria Alfitra a.k.a pzUH**.