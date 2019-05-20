import Phaser from "phaser";
import Game from "../scenes/Game";
import TomatoImg from "../images/tomato.png";

class Tomato extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    this.tomato = this.scene.physics.add.sprite(x, y, "tomato");
    this.tomato.setScale(0.07);

    this.tomato.setBounce(0.2);
    this.tomato.setCollideWorldBounds(true);

    this.tomato.body.setGravityY(300);

    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  preload() {}

  create() {
    // this.tomato = this.scene.physics.add.sprite(this.x, this.y, "tomato");
    // this.tomato.setScale(0.07);
    // this.tomato.setBounce(0.2);
    // this.tomato.setCollideWorldBounds(true);
    // this.tomato.body.setGravityY(300);
    // this.cursors = this.scene.input.keyboard.createCursorKeys();
    // console.log(this.tomato.anchor)
    // this.tomato.anchor.setTo(0.5, 0.5);
    // return this.tomato;
  }

  update() {
    //Defining tomato movement

    if (this.cursors.space.isDown) {
      this.tomato.y -= 10;
      console.log("space");
    }

    if (this.cursors.right.isDown) {
      this.tomato.x += 3;
      this.tomato.angle += 10;
    } else if (this.cursors.left.isDown) {
      this.tomato.x -= 3;
      this.tomato.angle -= 10;
    }
  }
}

export default Tomato;
