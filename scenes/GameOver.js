import Phaser from "phaser";
import SmashedTomato from "../images/smashedTomato.png";
import SmashedTomato2 from "../images/smashedTomato2.png";
import Splash from "../sound/splash.mp3";

class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: "GameOver"
    });
  }

  preload() {
    this.load.image("smashedTomato", SmashedTomato);
    this.load.audio("splash", Splash);
  }

  create() {
    //Gameover image
    const smashedTomato = this.add.image(150, 400, "smashedTomato");
    smashedTomato.setScale(0.6);
    // const smashedTomato2 = this.add.image(150, 400, "smashedTomato2");

    //Game over text
    this.gameOverText = this.add.text(640, 200, " Come on, catch up!", {
      font: "80px Impact",
      align: "center"
    });
    this.gameOverText.setOrigin(0.5);

    // Add soundeffects
    this.splash = this.sound.add("splash");
    this.splash.play({
      loop: false,
      volume: 2
    });

    //Play again text
    this.restartText = this.add.text(640, 550, "Press R to play again", {
      font: "20px",
      align: "center"
    });
    this.restartText.setOrigin(0.5);

    //Restarting game on key press R
    this.input.keyboard.on(
      "keyup_R",
      function(e) {
        this.scene.start("Game");
      },
      this
    );
  }

  update() {}
}

export default GameOver;
