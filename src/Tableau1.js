
class Tableau1 extends Phaser.Scene{
 
    preload(){
        this.load.image('volcan','assets/fond/back.jpg')
        for(let j=1;j<=23;j++) {
            this.load.image('lazer' + j, 'assets/lave/lazer_' + j + '.png');
        }
        for(let j=1;j<=26;j++) {
            this.load.image('Idle' + j, 'assets/dragon/dragonvert/idle/Idle' + j + '.png');
        }
        for(let j=1;j<=33;j++) {
            this.load.image('attack' + j, 'assets/dragon/dragonvert/attack/attack' + j + '.png');
        }
        for(let j=1;j<=16;j++) {
            this.load.image('walk' + j, 'assets/dragon/dragonvert/walk/walk' + j + '.png');
        }
        for(let j=1;j<=13;j++) {
            this.load.image('flight' + j, 'assets/dragon/dragonvert/flight/flight' + j + '.png');
        }
        for(let j=1;j<=3;j++) {
            this.load.image('fire' + j, 'assets/feu/fire' + j + '.png');
        }
        for(let j=1;j<=26;j++) {
            this.load.image('jumpr' + j, 'assets/dragon/dragonrouge/juump/jumpr' + j + '.png');
        }
        this.load.audio('foudre','audio/bruit tonerre.mp3');
        this.load.audio('drake','audio/dragon roar.mp3');





    }

    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }

    shake() {
       this.cameras.main.shake( 500)
    }

    create(){
        /**
         * backgroung
         * @type {Phaser.GameObjects.Image}
         */
        let volcaan=this.add.sprite(489,251,'volcan');
        volcaan.scale=1.4
        /**
         * laser jaune
         * @type {Phaser.GameObjects.Sprite}
         */
        this.laveee = this.add.sprite(580, 0, 'lazer').setOrigin(0,0);
        this.anims.create({
            key: 'lazerss',
            frames: this.getFrames('lazer',23),
            frameRate: 16,
            repeat: 0
        });
        this.laveee.setTintFill(0x0000);
        this.laveee.scale=0.3
        this.laveee.visible=false
        /**
         * laser jaune
         * @type {Phaser.GameObjects.Sprite}
         */
        this.laveee1 = this.add.sprite(380, 0, 'lazer').setOrigin(0,0);
        this.anims.create({
            key: 'lazer',
            frames: this.getFrames('lazer',23),
            frameRate: 16,
            repeat: 0,
        });
        this.laveee1.setTintFill(0xD9E20C);
        this.laveee1.scale=0.3
        this.laveee1.visible=false
        /**
         * laser rouge
         * @type {Phaser.GameObjects.Sprite}
         */
        this.laveee2 = this.add.sprite(10, 0, 'lazer').setOrigin(0,0);
        this.anims.create({
            key: 'lazers',
            frames: this.getFrames('lazer',23),
            frameRate: 16,
            repeat: 0,
        });
        this.laveee2.setTintFill(0xE10606);
        this.laveee2.scale=0.26
        this.laveee2.visible=false
        /**
         * laser de base
         * @type {Phaser.GameObjects.Sprite}
         */
        this.laveee3 = this.add.sprite(780, 0, 'lazer').setOrigin(0,0);
        this.anims.create({
            key: 'lazerr',
            frames: this.getFrames('lazer',23),
            frameRate: 16,
            repeat: 0
        });
        this.laveee3.scale=0.3
        this.laveee3.visible=false
        /**
         * feu haut volcan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.feu = this.add.sprite(580, 0, 'fire').setOrigin(0,0);
        this.anims.create({
            key: 'fire',
            frames: this.getFrames('fire',3),
            frameRate: 16,
            repeat: -1
        });
        this.feu.visible=false
        /**
         * feu meteorite en bas a gauche
         * @type {Phaser.GameObjects.Sprite}
         */
        this.feu1 = this.add.sprite(80, 380, 'fire1').setOrigin(0,0);
        this.anims.create({
            key: 'fire',
            frames: this.getFrames('fire',3),
            frameRate: 16,
            repeat: -1
        });
        this.feu1.visible=false
        /**
         * dragonvert iddle
         * @type {Phaser.GameObjects.Sprite}
         */
        this.dragonidle = this.add.sprite(350, 220, 'Idle1').setOrigin(0,0);
        this.anims.create({
            key: 'Idle',
            frames: this.getFrames('Idle',26),
            frameRate: 20,
            repeat: 0,
            hideOnComplete:true,
        });
        this.dragonidle.visible=false
        this.dragonidle.scale=0.3
        /**
         * dragonvert attack
         * @type {Phaser.GameObjects.Sprite}
         */
        this.dragonattck = this.add.sprite(700, 100, 'attack1').setOrigin(0,0);
        this.anims.create({
            key: 'attack',
            frames: this.getFrames('attack',33),
            frameRate: 11,
            repeat: 0,
            hideOnComplete:true,
        });
        this.dragonattck.visible=false
        this.dragonattck.scale=0.48
        this.dragonattck.flipX=true
        /**
         * dragonvert walk
         * @type {Phaser.GameObjects.Sprite}
         */
        this.dragonwalk = this.add.sprite(50, 300, 'walk1').setOrigin(0,0);
        this.anims.create({
            key: 'walk',
            frames: this.getFrames('walk',16),
            frameRate: 16,
            repeat: 3,
            hideOnComplete:true,
        });
        this.dragonwalk.visible=false
        this.dragonwalk.scale=0.25

        let tween = this.tweens.add({
            targets: [this.dragonwalk],
            x:1700,
            ease: 'Linear',
            duration: 4500,
            repeat:-1
        })
        /**
         * dragonvert flight
         * @type {Phaser.GameObjects.Sprite}
         */
        this.dragonflight = this.add.sprite(-320, -10, 'flight1').setOrigin(0,0);
        this.anims.create({
            key: 'flight',
            frames: this.getFrames('flight',13),
            frameRate: 8,
            repeat: 3,
            hideOnComplete:true,
        });
        this.dragonflight.visible=false
        this.dragonflight.scale=0.2

        let tween1 = this.tweens.add({
            targets: [this.dragonflight],
            x:1600,
            ease: 'Linear',
            duration: 6500,
            repeat:-1
        })
        /**
         * dragonrouge jump
         * @type {Phaser.GameObjects.Sprite}
         */
        this.dragonjumpr = this.add.sprite(150, 100, 'jumpr').setOrigin(0,0);
        this.anims.create({
            key: 'jump',
            frames: this.getFrames('jumpr',26),
            frameRate: 8,
            repeat: 0,
            hideOnComplete:true,
        });
        this.dragonjumpr.visible=false
        this.dragonjumpr.scale=0.3

        this.initKeyboard();
    }

    initKeyboard(){
        let me=this
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.laveee.visible=true
                    me.sound.play('foudre')
                    me.laveee.play('lazerss')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.laveee1.visible=true
                    me.sound.play('foudre')
                    me.laveee1.play('lazer')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.laveee2.visible=true
                    me.sound.play('foudre')
                    me.laveee2.play('lazers')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.laveee3.visible=true
                    me.sound.play('foudre')
                    me.laveee3.play('lazerr')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.dragonidle.visible=true
                    me.dragonidle.play('Idle')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    me.dragonattck.visible=true
                    me.sound.play('drake')
                    me.dragonattck.play('attack')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.U:
                    me.dragonwalk.x=50
                    me.dragonwalk.visible=true
                    me.dragonwalk.play('walk')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.I:
                    me.dragonflight.visible=true
                    me.dragonflight.play('flight')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    me.feu.visible=true
                    me.feu.play('fire')
                    me.feu1.visible=true
                    me.feu1.play('fire')
                   me.shake()
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.feu.visible=false
                    me.feu.stop('fire')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.feu1.visible=false
                    me.feu1.play('fire')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.dragonjumpr.visible=true
                    me.dragonjumpr.play('jump')
                    break;
            }
        });
    }
}
