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
      .create(200, 720, "ground")
      .setScale(2)
      .refreshBody();

    // Add rat sprite
    // this.rat = new Rat(this, 400, 600, "rat").create();
    // this.rat.create();
    this.rat = new Rat(this, 400, 550, "rat");

    // Add tomato sprite
    // this.tomato = new Tomato(this, 100, 600, "tomato").create();
    this.tomato = new Tomato(this, 100, 570, "tomato");

    // Add collider
    this.physics.add.collider(this.rat.rat, this.tomato.tomato, () => {
      console.log("hit rat");
    });
    this.physics.add.collider(this.tomato.tomato, platforms, () => {
      // console.log("hit ground");
    });
    this.physics.add.collider(this.rat.rat, platforms, () => {
      // console.log("hit ground");
    });
    this.physics.add.collider(
      this.tomato,
      this.rat,
      this.rat.collide
      // null,
      // this
    );

    function camera(player, scene) {
      // set Cameras here
      scene.cameras.main.setBounds(0, 0, 2000, 400);
      scene.physics.world.setBounds(0, 0, 2000, 400);
      scene.cameras.main.startFollow(player, true, 0.5, 0.5);
    }

    if (this.tomato && camera(this.tomato.tomato, this.scene.scene));
  }

  update() {
    this.tomato.update();
    this.rat.update();
  }
}

export default Game;
