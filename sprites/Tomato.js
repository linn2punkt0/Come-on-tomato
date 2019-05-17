import Phaser from "phaser";
import Game from "../scenes/Game";
import TomatoImg from "../images/tomato.png";

class Tomato extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;
    // scene.add.existing(this);
  }

  preload() {
    // console.log(this.scene);
    // this.scene.load.image("tomato", TomatoImg);
  }

  create() {
    const tomato = this.scene.add.sprite(this.x, this.y, "tomato");
    tomato.setScale(0.07);
    // cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // if (cursors.down.isDown()) {
    //   tomato.y += 1;
    // }
  }
}

export default Tomato;
