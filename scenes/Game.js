import Phaser from "phaser";
import Tomato from "../sprites/Tomato";
import Background from "../images/city.png";
import TomatoImg from "../images/tomato.png";

class Game extends Phaser.Scene {
  constructor() {
    super({
      key: "Game"
    });

  }

  preload() {
    this.load.image("city", Background);
    this.load.image("tomato", TomatoImg);
  }
  create() {
    const city = this.add.image(0, 400, "city");
    this.tomato = new Tomato(this, 100, 600, "tomato");
    this.tomato.create();
  }
  update() {
    this.tomato.update();
  }

}


export default Game;
