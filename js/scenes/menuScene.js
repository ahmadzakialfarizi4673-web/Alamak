// Menu Scene - The Seksi Famsoi

class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }
    
    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Title
        this.add.text(width / 2, height / 4, 'THE SEKSI FAMSOI', {
            font: 'bold 48px Courier New',
            fill: '#00ff88',
            stroke: '#00aa44',
            strokeThickness: 2
        }).setOrigin(0.5);
        
        // Subtitle
        this.add.text(width / 2, height / 3, 'Cyberpunk RPG', {
            font: '24px Courier New',
            fill: '#00cc6a',
            align: 'center'
        }).setOrigin(0.5);
        
        // Start Button
        const startButton = this.add.text(width / 2, height / 2, 'START GAME', {
            font: 'bold 32px Courier New',
            fill: '#00ff88',
            backgroundColor: '#0a0e27',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();
        
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
        
        startButton.on('pointerover', () => {
            startButton.setFill('#ff00ff');
        });
        
        startButton.on('pointerout', () => {
            startButton.setFill('#00ff88');
        });
        
        // Instructions
        this.add.text(width / 2, height * 0.75, 'Use WASD to move\nClick to interact\nE for inventory', {
            font: '16px Courier New',
            fill: '#00aa44',
            align: 'center'
        }).setOrigin(0.5);
    }
}
