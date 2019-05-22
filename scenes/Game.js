import Phaser from "phaser";
import Tomato from "../sprites/Tomato";
import City from "../images/cityGrey.png";
import Sky from "../images/sky4.jpg";
import TomatoImg from "../images/tomato.png";
import RatImg from "../images/rat3.png";
import Rat from "../sprites/Rat";
import Ground from "../images/ground2.png";
import Can from "../sprites/Can";
import CanImg from "../images/tomatoCan.png";

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
    this.load.image("can", CanImg);
    this.load.image("ground", Ground);
  }
  create() {
    // Add city background, sky and ground
    const sky = this.add.image(600, 0, "sky");
    sky.setScale(0.4);
    sky.setScrollFactor(0);
    const city = this.add.image(1450, 400, "city");
    const platforms = this.physics.add.staticGroup();
    platforms
      .create(1200, 780, "ground")
      .setScale(3)
      .refreshBody();
    // Game over
    this.gameOver = false;

    // Add rat sprite
    this.rat = new Rat(this, 400, 550, "rat");

    //Create and add can sprites to group
    this.can1 = new Can(this, 600, -700, "can");
    this.can2 = new Can(this, 800, -800, "can");
    this.can3 = new Can(this, 600, -1000, "can");
    this.can4 = new Can(this, 1000, -1200, "can");

    this.cans = this.add.group();
    this.cans.add(this.can1);
    this.cans.add(this.can2);
    this.cans.add(this.can3);
    this.cans.add(this.can4);

    // Add tomato sprite
    this.tomato = new Tomato(this, 100, 570, "tomato");

    // Add collider
    this.physics.add.collider(this.rat.rat, this.tomato.tomato, () => {
      this.gameOver = true;
    });
    // Looping through cans and check for tomato collision
    this.cans.children.entries.forEach((can) => {
      this.physics.add.collider(this.tomato.tomato, can.can, () => {
          this.gameOver = true;
      });
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

    // Set camera
    function camera(player, scene) {
      scene.cameras.main.setBounds(0, 0, 3000, 640);
      scene.physics.world.setBounds(0, 0, 3000, 640);
      scene.cameras.main.startFollow(player, true, 0.5, 0.5);
    }
    if (this.tomato && camera(this.tomato.tomato, this.scene.scene));
  }

  update() {
    this.tomato.update();
    this.rat.update();

    //Breaking update of cans if game over
    try {
      this.cans.getChildren().forEach((can) => {
        can.update();
      });
    }
    catch (e) {
      if (e === TypeError);
    }

    //Changing scene on game over
    if (this.gameOver) {
      this.tomato.tomato.setTint(0x2A0000);
      this.scene.stop("Game");
      this.scene.transition({
        target: "GameOver",
        duration: 300,
      });
    }
  }
}

export default Game;
