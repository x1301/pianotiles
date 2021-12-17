let gameConfig = {
    type: Phaser.AUTO,
    width: 978,
    height: 501,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        min: {
            width: 978,
            height: 501,
        },
        max: {
            width: 1728,
            height: 972,
        }
    },
    backgroundColor: '#ffffff',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
