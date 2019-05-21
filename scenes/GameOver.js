import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: "GameOver"
    });
  }

  create() {
    this.gameOverText = this.add.text(400, 300, "Game Over", {
      font:"80px Impact",
      align:'center',
    });
    this.gameOverText.setOrigin(0.5);
  }

  update() {}
}

export default GameOver;
