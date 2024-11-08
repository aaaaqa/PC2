import Phaser from "phaser"

class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }
    preload() {
        //this.load.spritesheet('numbers', 'assets/numbers.png', { frameWidth: 100, frameHeight: 100 });
        this.load.image('gameTitle', 'assets/fondos/menu.png');
        //this.load.image('play', 'assets/play.png');
        //this.load.image('higher', 'assets/higher.png');
        //this.load.image('lower', 'assets/lower.png');
        //this.load.image('gameover', 'assets/gameover.png');
    }

    create() {
        this.scene.start('GameTitleScene');
    }
}
export default PreloadScene