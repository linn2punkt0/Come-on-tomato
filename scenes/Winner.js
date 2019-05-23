import Phaser from "phaser";
import Tomato from "../images/winnerTomato.png";

class Winner extends Phaser.Scene {
  constructor() {
    super({
      key: "Winner"
    });
  }

  preload() {
    this.load.image("Tomato", Tomato);
  }

  create() {
    const tomato = this.add.image(150, 400, "Tomato");
    tomato.setScale(0.6);
    // Winner text
    this.winnerText = this.add.text(700, 200, "You won!", {
      font: "80px Impact",
      align: "center"
    });
    this.winnerText.setOrigin(0.5);

    // Play again text
    this.restartText = this.add.text(700, 550, "Want to play again? Press R", {
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
