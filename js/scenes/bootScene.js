// Boot Scene - The Seksi Famsoi

class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }
    
    preload() {
        // Load assets here if needed
        console.log('Loading assets...');
    }
    
    create() {
        console.log('Boot scene created');
        this.scene.start('MenuScene');
    }
}
