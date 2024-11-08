import Phaser from "phaser"

class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }
    preload() {
        //this.load.spritesheet('numbers', 'assets/numbers.png', { frameWidth: 100, frameHeight: 100 });
        this.load.image('game', 'assets/fondos/game.png');
        this.load.image('gameTitle', 'assets/fondos/menu.png');
        this.load.image('player', 'assets/player.png');
        this.load.image('amarillo', 'assets/amarillo.png');
        this.load.image('rojo', 'assets/rojo.png');
        this.load.image('verde', 'assets/verde.png');
        this.load.image('gameover', 'assets/fondos/gam-over.jpg');
    }

    create() {
        this.scene.start('GameTitleScene');
    }
}
export default PreloadScene