import Phaser from "phaser";
import Tomato from "../images/winnerTomato.png";
import Applause from "../sound/applause.mp3";

class Winner extends Phaser.Scene {
  constructor() {
    super({
      key: "Winner"
    });
  }

  preload() {
    this.load.image("Tomato", Tomato);
    this.load.audio("Applause", Applause);
  }

  create() {
    const tomato = this.add.image(150, 400, "Tomato");
    tomato.setScale(0.6);
    // Winner text
    this.winnerText = this.add.text(640, 200, "You won!", {
      font: "80px Impact",
      align: "center"
    });
    this.winnerText.setOrigin(0.5);

    // Add soundeffects
    this.applause = this.sound.add("Applause");
    this.applause.play({
      loop: false,
      volume: 2
    });

    // Play again text
    this.restartText = this.add.text(640, 550, "Want to play again? Press R", {
      font: "20px",
      align: "center"
    });
    this.restartText.setOrigin(0.5);

    // Restarting game on key press R
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

export default Winner;
