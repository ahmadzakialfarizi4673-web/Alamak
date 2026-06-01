// Game Scene - The Seksi Famsoi

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }
    
    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Background
        this.add.rectangle(0, 0, width, height, 0x0a0e27).setOrigin(0);
        
        // Create player sprite placeholder
        this.playerSprite = this.add.circle(player.x, player.y, 15, 0x00ff88);
        this.playerSprite.setInteractive();
        
        // Create some NPCs
        this.npcSprites = {};
        const merchant = getNPC('merchant_0');
        if (merchant) {
            const merchantSprite = this.add.circle(merchant.x, merchant.y, 12, 0xff00ff);
            merchantSprite.setInteractive();
            merchantSprite.on('pointerdown', () => {
                console.log(merchant.dialogue);
            });
            this.npcSprites['merchant_0'] = merchantSprite;
        }
        
        // Create enemies
        this.enemies = [];
        this.createEnemy(600, 200);
        this.createEnemy(300, 400);
        this.createEnemy(500, 500);
        
        // Input
        this.keys = this.input.keyboard.addKeys('W,A,S,D,E');
        
        // UI Panel
        this.createUI();
        
        // Event listener
        this.events.on('update', this.update, this);
    }
    
    createEnemy(x, y) {
        const enemy = new Enemy('security_drone', x, y);
        const enemySprite = this.add.circle(x, y, 10, 0xff4444);
        enemySprite.setInteractive();
        enemySprite.on('pointerdown', () => {
            if (!combatSystem.inCombat) {
                combatSystem.startCombat(enemy);
                this.handleCombat(enemy, enemySprite);
            }
        });
        enemy.sprite = enemySprite;
        this.enemies.push(enemy);
    }
    
    handleCombat(enemy, enemySprite) {
        // Simulate combat
        let combatLog = 'Combat started!\n';
        
        while (enemy.health > 0 && player.health > 0) {
            // Player attacks
            const playerDamage = combatSystem.playerAttack();
            combatLog += 'Player deals ' + playerDamage + ' damage!\n';
            
            if (enemy.health <= 0) break;
            
            // Enemy attacks
            const enemyDamage = combatSystem.enemyAttack();
            combatLog += 'Enemy deals ' + enemyDamage + ' damage!\n';
            
            if (player.health <= 0) break;
        }
        
        if (enemy.health <= 0) {
            combatLog += 'Victory! Enemy defeated!';
            enemySprite.destroy();
            const index = this.enemies.indexOf(enemy);
            if (index > -1) this.enemies.splice(index, 1);
        } else {
            combatLog += 'Defeat!';
        }
        
        console.log(combatLog);
        this.updateUI();
    }
    
    createUI() {
        this.uiText = this.add.text(10, 10, '', {
            font: '14px Courier New',
            fill: '#00ff88',
            backgroundColor: '#0a0e27',
            padding: { x: 10, y: 10 }
        });
        this.uiText.setScrollFactor(0);
        
        this.updateUI();
    }
    
    updateUI() {
        const info = `Level: ${player.level} | HP: ${player.health}/${player.maxHealth} | XP: ${Math.floor(player.xp)}/${Math.floor(player.maxXp)} | Credits: ${player.credits}`;
        this.uiText.setText(info);
    }
    
    update() {
        const speed = player.speed;
        
        // Movement
        if (this.keys.W.isDown) {
            player.y -= speed * this.game.loop.deltaHistory[0] / 1000;
        }
        if (this.keys.S.isDown) {
            player.y += speed * this.game.loop.deltaHistory[0] / 1000;
        }
        if (this.keys.A.isDown) {
            player.x -= speed * this.game.loop.deltaHistory[0] / 1000;
        }
        if (this.keys.D.isDown) {
            player.x += speed * this.game.loop.deltaHistory[0] / 1000;
        }
        
        // Inventory key
        if (this.keys.E.isDown) {
            console.log('Inventory:', inventorySystem.getInventoryList());
        }
        
        // Update player sprite position
        this.playerSprite.x = player.x;
        this.playerSprite.y = player.y;
        
        // Clamp to screen
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        if (player.x < 0) player.x = 0;
        if (player.x > width) player.x = width;
        if (player.y < 0) player.y = 0;
        if (player.y > height) player.y = height;
    }
}
