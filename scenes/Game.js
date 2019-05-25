import Phaser from "phaser";
import Tomato from "../sprites/Tomato";
import City from "../images/cityDark.png";
import Sky from "../images/sky4.jpg";
import TomatoImg from "../images/tomato.png";
import RatImg from "../images/rat3.png";
import Rat from "../sprites/Rat";
import Ground from "../images/ground2.png";
import Can from "../sprites/Can";
import CanImg from "../images/tomatoCan.png";
import SeagullImg from "../images/demonSeagull2.png";
import Seagull from "../sprites/Seagull";
import CarImg from "../images/car1.png";
import Car from "../sprites/Car";
import TrafficLightImg from "../images/trafficLight.png";
import TrafficLight from "../sprites/TrafficLight";
import FinishImg from "../images/finish.png";
import Finish from "../sprites/Finish";
import BackgroundSound from "../sound/background.mp3";

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
    this.load.image("seagull", SeagullImg);
    this.load.image("car", CarImg);
    this.load.image("trafficLight", TrafficLightImg);
    this.load.image("finish", FinishImg);

    this.load.audio("backgroundSound", BackgroundSound);
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

    // Defining game over
    this.gameOver = false;

    // Add soundeffects
   this.sound.add("backgroundSound");
   this.sound.play('backgroundSound', {
      loop:true,
      volume: 2
    });

    // Add tomato sprite
    this.tomato = new Tomato(this, 100, 570, "tomato");

    // Add enemy sprites
    this.rat = new Rat(this, 400, 550, "rat");
    // this.seagull = new Seagull(this, 1000, 100, "seagull");

    this.seagulls = this.add.group();

    for (let z = 0; z < 20; z++){

        const randomPoint = Phaser.Math.Between(0, 2900);
        const yrand = Phaser.Math.Between(-100, -2000 )

        this.seagulls.add(
          new Seagull(this, randomPoint + 1000, yrand)
        );
    };

    //Create and add can sprites to group
    this.cans = this.add.group();

    for (let i = 0; i < 10; i++) {
      var xValue = Phaser.Math.Between(500, 2000);
      var yValue = Phaser.Math.Between(-1000, -2000);
      this.can = new Can(this, xValue, yValue, "can");
      this.cans.add(this.can);
    }

    this.trafficLight = new TrafficLight(this, 2100, 500, "trafficLight");

    this.car = new Car(this, 2500, 550, "car");

    this.finish = new Finish(this, 2960, 500, "finish");

    // Add colliders
    this.physics.add.collider(this.rat.rat, this.tomato.tomato, () => {
      this.gameOver = true;
    });
    // Looping through cans and check for tomato collision
    this.cans.children.entries.forEach(can => {
      this.physics.add.collider(this.tomato.tomato, can.can, () => {
        this.gameOver = true;
      });
    });

    this.seagulls.children.entries.forEach(seagull => {
          this.physics.add.collider(this.tomato.tomato, seagull.seagull, () => {
        this.gameOver = true;
      });
    });

    this.physics.add.collider(this.car.car, this.tomato.tomato, () => {
      this.gameOver = true;
    });
    this.physics.add.collider(this.tomato.tomato, this.trafficLight.trafficLight, () => {
      this.gameOver = true;
    });
    this.physics.add.collider(this.car.car, this.trafficLight.trafficLight, () => {
      this.car.car.body.setVelocityX(+100);
      this.trafficLight.trafficLight.body.setVelocityX(0);
    });
    this.physics.add.collider(this.car.car, this.finish.finish, () => {
      this.car.car.body.setVelocityX(-100);
      this.finish.finish.body.setVelocityX(0);
    });

    this.physics.add.collider(this.tomato.tomato, platforms, () => {
      // console.log("hit ground");
    });
    this.physics.add.collider(this.rat.rat, platforms, () => {
      // console.log("hit ground");
    });


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
    // this.seagull.update();

    //Cans - Breaking update of cans if game over
    try {
      this.cans.getChildren().forEach(can => {
        can.update();
      });
    } catch (e) {
      if (e === TypeError);
    }

    // Seagulls
    try {
      this.seagulls.getChildren().forEach(seagull => {
        seagull.update();
      });
    } catch (e) {
      if (e === TypeError);
    }

    //Changing scene on game over
    if (this.gameOver) {
      this.tomato.tomato.setTint(0x2a0000);
      this.scene.stop("Game");

      this.scene.transition({
        target: "GameOver",
        duration: 500
      });
    }

    if (this.tomato.tomato.x >= 2960) {
      console.log("winner");
      this.scene.stop("Game");

      this.scene.transition({
        target: "Winner",
        duration: 500
      });
    }
  }
}

export default Game;