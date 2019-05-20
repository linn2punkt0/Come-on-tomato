import Phaser from "phaser";
import Tomato from "../sprites/Tomato";
import City from "../images/cityGrey.png";
import Sky from "../images/sky4.jpg";
import TomatoImg from "../images/tomato.png";
import RatImg from "../images/rat3.png";
import Rat from "../sprites/Rat";
import Ground from "../images/ground2.png";

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
    this.load.image("ground", Ground);
  }
  create() {
    // Add city background, sky and ground
    const sky = this.add.image(600, 0, "sky");
    sky.setScale(0.4);
    const city = this.add.image(0, 400, "city");
    const platforms = this.physics.add.staticGroup();
    platforms
      .create(200, 660, "ground")
      .setScale(1)
      .refreshBody();

    // Add rat sprite
    // this.rat = new Rat(this, 400, 600, "rat").create();
    // this.rat.create();
    this.rat = new Rat(this, 400, 600, "rat");

    // Add tomato sprite
    // this.tomato = new Tomato(this, 100, 600, "tomato").create();
    this.tomato = new Tomato(this, 100, 600, "tomato");

    // Add collider
    this.physics.add.collider(this.rat, this.tomato, () => {
      console.log("hello");
    });
    this.physics.add.collider(
      this.tomato,
      this.rat,
      this.rat.collide
      // null,
      // this
    );
  }
  update() {
    this.tomato.update();
    this.rat.update();
  }
}

export default Game;
