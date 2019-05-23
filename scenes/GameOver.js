import Phaser from 'phaser';
import SmashedTomato from "../images/smashedTomato.png";
import SmashedTomato2 from "../images/smashedTomato2.png";

class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: "GameOver"
    });

  }

  preload() {
    this.load.image("smashedTomato", SmashedTomato);
  }

  create() {
    //Gameover image
    const smashedTomato = this.add.image(150, 400, "smashedTomato");
    smashedTomato.setScale(0.6);
    // const smashedTomato2 = this.add.image(150, 400, "smashedTomato2");

    //Game over text
    this.gameOverText = this.add.text(450, 200, " Come on, catch up!", {
      font: "80px Impact",
      align: 'center',
    });
    this.gameOverText.setOrigin(0.5);

    //Play again text
    this.restartText = this.add.text(450, 550, "Press R to play again", {
      font: "20px",
      align: 'center',
    });
    this.restartText.setOrigin(0.5);

    // this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on('keyup_R', function(e) {
      this.scene.start("Game");
    }, this);
  }

  update() {
  }
}

export default GameOver;
