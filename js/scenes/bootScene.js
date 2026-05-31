// Boot Scene - The Seksi Famsoi

class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }
    
    preload() {
        // Load assets here if needed
        console.log('🔧 Loading assets...');
    }
    
    create() {
        console.log('✅ Boot scene initialized');
        // Start menu scene
        this.scene.start('Menu');
    }
}