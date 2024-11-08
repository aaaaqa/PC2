import Phaser from "phaser"

class GameOverScene extends Phaser.Scene{
    constructor() {
        super("GameOverScene");
    }

    create() {
        let gameOverTitle = add.sprite(160, 160, 'gameover');
        gameOverTitle.setAnchor(0.5, 0.5); 
        let playButton = add.sprite(160, 320, 'plays');
        playButton.setAnchor(0.5, 0.5);
        this.text_ = this.add.text(100, 0, 'YA ME FUI LA BIKA G_G',{
            font: '10px Arial',
            fill: '#FFFFFF'
        });
        this.text_ = this.add.text(100, 0, 'Puntaje: ' + this.score,{
            font: '10px Arial',
            fill: '#FFFFFF'
        });
        playButton.add('pointersdown', () => this.playTheGame());
    }
    playTheGame() {
        this.scene.start('GameTitleScene')
    }
}
export default GameOverScene