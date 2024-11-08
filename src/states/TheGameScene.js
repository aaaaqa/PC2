import Phaser from "phaser"

class TheGameScene extends Phaser.Scene{

    constructor() {
        super("TheGameScene");
    }

    create() {
        this.loadLevel();
        this.initPlayer();
        this.time = 0;

        this.playButton = this.add.text(250, 0, 'Puntaje: ' + this.score, {
            font: '10px Arial',
            fill: '#FFFFFF'
        });

        this.lifes = this.add.text(0, 20, 'Vidas: ' + this.life, {
            font: '10px Arial',
            fill: '#FFFFFF'
        });

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    loadLevel(){
        this.gameTitle = this.add.sprite(160, 160, 'game');
        this.gameTitle.setOrigin(0.5, 0.5);

        this.text_ = this.add.text(0, 0, 'Tiempo',{
            font: '10px Arial',
            fill: '#FFFFFF'
        });

        this.score = 0;
        this.consecutive = 0;
        this.life = 3;
    }

    initPlayer(){
        this.player = this.physics.add.sprite(100,100,'player');
        this.player.setCollideWorldBounds(true);
        console.log(this.player.texture);
    }
    update() {
        this.player.body.setVelocityY(0);
        if(this.keyW.isDown) {
            this.player.setVelocityY(-200);
            this.player.setTexture('amarillo');
        } else if(this.keyS.isDown) {
            this.player.setVelocityY(200);
            this.player.setTexture('rojo');
        } else if(this.keyA.isDown) {
            this.player.setTexture('player');
        } else if(this.keyD.isDown) {
            this.player.setTexture('verde');
        }
        this.time += 1;
        if(this.time >= 50){
            this.time = 0;
            this.initAlien();
        }

        if(this.life <= 0){
            this.scene.start('GameOverScene');
        }
    }

    initAlien(){
        const alien_color = ['amarillo', 'rojo', 'verde'];

        this.alien = this.physics.add.sprite(350,100,alien_color[Math.floor(Math.random()*alien_color.length)]);
        this.physics.add.collider(this.player,this.alien,this.hitAlien,null,this);
        this.alien.setVelocityX(-200);
    }

    hitAlien(player, alien){
        if(alien.texture == player.texture){
            this.score += 10;
            this.consecutive += 1;
            if(this.consecutive % 3 == 0){
                this.score *= 2;
            } else if(this.consecutive % 5 == 0) {
                this.score *= 4;
            }
            this.playButton.text = "Puntaje: " + this.score;
        }else{
            this.life -= 1;
            this.consecutive = 0;
            this.lifes.text = "Vidas: " + this.life;
        }
        alien.destroy();
    }
}
export default TheGameScene