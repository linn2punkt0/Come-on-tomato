import Phaser from "phaser";
import Game from "./scenes/Game";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false
    }
  },
  scene: [Game]
};

const game = new Phaser.Game(config);
