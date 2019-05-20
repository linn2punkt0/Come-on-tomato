import Phaser from "phaser";
import Tomato from "../sprites/Tomato";
import City from "../images/cityGrey.png";
import Sky from "../images/sky4.jpg";
import TomatoImg from "../images/tomato.png";
import RatImg from "../images/rat3.png";
import Rat from "../sprites/Rat";

class Game extends Phaser.Scene {
  constructor() {
    super({
      key: "Game"
    });
  }

  preload() {
    this.load.image("sky", Sky);
    this.load.image("city", City);
    this.load.image("tomato", TomatoImg);
    this.load.image("rat", RatImg);
  }

  create() {
    // Add city background
    const sky = this.add.image(600, 0, "sky");
    sky.setScale(0.4);
    const city = this.add.image(0, 400, "city");

    // Add tomato sprite
    const tomato = new Tomato(this, 100, 600, "tomato");
    tomato.create();

    // Add rat sprite
    const rat = new Rat(this, 400, 600, "rat");
    rat.create();
  }

  update() {}
}
export default Game;
