import Phaser from "phaser"

class GameOverScene extends Phaser.Scene{
    constructor() {
        super("GameOverScene");
    }

    create() {
        this.gameOverTitle = this.add.sprite(160, 160, 'gameover');
        this.gameOverTitle.setOrigin(0.5, 0.5);
        this.gameOverTitle.setInteractive();
        this.gameOverTitle.on('pointerdown', () => {
            this.playTheGame();
        });
        this.text_ = this.add.text(100, 0, 'YA ME FUI LA BIKA G_G',{
            font: '10px Arial',
            fill: '#FFFFFF'
        });
        this.text_ = this.add.text(100, 50, 'Puntaje: ' + this.score,{
            font: '10px Arial',
            fill: '#FFFFFF'
        });
    }
    playTheGame() {
        this.scene.start('GameTitleScene')
    }
}
export default GameOverScene