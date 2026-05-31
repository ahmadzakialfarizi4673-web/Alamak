// Game Scene - The Seksi Famsoi

class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    
    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Background
        this.add.rectangle(0, 0, width, height, 0x0a0e27).setOrigin(0);
        
        // Grid pattern background
        const graphics = this.make.graphics({ x: 0, y: 0, add: false });
        graphics.strokeStyle(1, 0x00ff88, 0.1);
        for (let i = 0; i < width; i += 50) {
            graphics.beginPath();
            graphics.moveTo(i, 0);
            graphics.lineTo(i, height);
            graphics.strokePath();
        }
        for (let i = 0; i < height; i += 50) {
            graphics.beginPath();
            graphics.moveTo(0, i);
            graphics.lineTo(width, i);
            graphics.strokePath();
        }
        graphics.generateTexture('grid', width, height);
        graphics.destroy();
        
        this.add.image(0, 0, 'grid').setOrigin(0).setAlpha(0.5);
        
        // UI Panel - Top Left (Player Stats)
        this.createPlayerStatsPanel();
        
        // UI Panel - Top Right (Combat/NPC Info)
        this.createCombatPanel();
        
        // Center Area - Main Game Display
        this.createGameDisplay();
        
        // Bottom Panel - Actions/Commands
        this.createActionPanel();
        
        // Initialize game systems
        this.initializeGame();
    }
    
    createPlayerStatsPanel() {
        const x = 20;
        const y = 20;
        
        // Background
        this.add.rectangle(x + 100, y + 80, 200, 160, 0x000814).setOrigin(0);
        this.add.graphics()
            .lineStyle(2, 0x00ff88, 1)
            .strokeRectShape(new Phaser.Geom.Rectangle(x, y, 200, 160));
        
        // Title
        this.add.text(x + 100, y + 10, 'PLAYER STATUS', {
            fontSize: '14px',
            fill: '#00ff88',
            fontStyle: 'bold'
        }).setOrigin(0.5);
        
        // Stats (will be updated in loop)
        this.playerStatsTexts = {
            name: this.add.text(x + 10, y + 30, 'Name: The Seksi Famsoi', { fontSize: '12px', fill: '#00ffaa' }),
            level: this.add.text(x + 10, y + 50, 'Level: 1', { fontSize: '12px', fill: '#00ffaa' }),
            hp: this.add.text(x + 10, y + 70, 'HP: 100/100', { fontSize: '12px', fill: '#ff0080' }),
            mana: this.add.text(x + 10, y + 90, 'Mana: 50/50', { fontSize: '12px', fill: '#0088ff' }),
            coins: this.add.text(x + 10, y + 110, 'Coins: 500', { fontSize: '12px', fill: '#ffff00' }),
            exp: this.add.text(x + 10, y + 130, 'EXP: 0/1000', { fontSize: '12px', fill: '#00ff88' })
        };
    }
    
    createCombatPanel() {
        const x = this.cameras.main.width - 220;
        const y = 20;
        
        // Background
        this.add.rectangle(x + 110, y + 80, 200, 160, 0x000814).setOrigin(0);
        this.add.graphics()
            .lineStyle(2, 0x00ff88, 1)
            .strokeRectShape(new Phaser.Geom.Rectangle(x, y, 200, 160));
        
        // Title
        this.add.text(x + 100, y + 10, 'COMBAT LOG', {
            fontSize: '14px',
            fill: '#00ff88',
            fontStyle: 'bold'
        }).setOrigin(0.5);
        
        // Combat log display
        this.combatLogText = this.add.text(x + 10, y + 30, 'Ready for battle...', {
            fontSize: '10px',
            fill: '#00ffaa',
            wordWrap: { width: 180 }
        });
    }
    
    createGameDisplay() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Main display area
        this.add.graphics()
            .lineStyle(2, 0x00ff88, 1)
            .strokeRectShape(new Phaser.Geom.Rectangle(centerX - 250, centerY - 150, 500, 300));
        
        // Title
        this.add.text(centerX, centerY - 130, 'GAME AREA', {
            fontSize: '16px',
            fill: '#00ff88',
            fontStyle: 'bold'
        }).setOrigin(0.5);
        
        // Display area text
        this.gameDisplayText = this.add.text(centerX, centerY, 'Welcome to The Seksi Famsoi!\\n\\nClick buttons to start playing', {
            fontSize: '14px',
            fill: '#00ffaa',
            align: 'center'
        }).setOrigin(0.5);
    }
    
    createActionPanel() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        const y = height - 100;
        
        // Background
        this.add.rectangle(width / 2, y + 50, width, 100, 0x000814).setOrigin(0.5);
        this.add.graphics()
            .lineStyle(2, 0x00ff88, 1)
            .strokeRectShape(new Phaser.Geom.Rectangle(40, y, width - 80, 100));
        
        // Action buttons
        const buttons = [
            { label: 'START TUTORIAL', x: 150, action: () => this.startTutorial() },
            { label: 'FIGHT BOSS', x: 350, action: () => this.fightBoss() },
            { label: 'VIEW INVENTORY', x: 550, action: () => this.viewInventory() },
            { label: 'VIEW QUESTS', x: 750, action: () => this.viewQuests() },
            { label: 'STATUS', x: 950, action: () => this.showStatus() }
        ];
        
        buttons.forEach(btn => {
            const button = this.add.text(btn.x, y + 25, btn.label, {
                fontSize: '11px',
                fill: '#000000',
                backgroundColor: '#00ff88',
                padding: { x: 8, y: 5 },
                fontStyle: 'bold'
            }).setOrigin(0.5).setInteractive();
            
            button.on('pointerover', () => {
                button.setScale(1.1);
                button.setStyle({ fill: '#ffffff' });
            });
            
            button.on('pointerout', () => {
                button.setScale(1);
                button.setStyle({ fill: '#000000' });
            });
            
            button.on('pointerdown', btn.action);
        });
    }
    
    initializeGame() {
        // Start first quest
        questSystem.startQuest('tutorial_quest');
        
        // Give starting items
        player.equipWeapon('cyber_sword');
        player.equipArmor('combat_suit');
        player.addItem('health_pack', 3);
        player.addItem('mana_potion', 2);
        
        console.log(player.getStatus());
    }
    
    startTutorial() {
        const npcData = getNPC('mentor_zyx');
        this.gameDisplayText.setText(
            `${npcData.name}:\n\n` +
            npcData.dialogue[0] + '\n\n' +
            'Starting combat tutorial!'
        );
        
        combatSystem.startCombat('rival_cipher');
        this.simulateCombat();
    }
    
    fightBoss() {
        const npcData = getNPC('boss_nero');
        this.gameDisplayText.setText(
            `${npcData.name}:\n\n` +
            npcData.dialogue[0]
        );
        
        combatSystem.startCombat('boss_nero');
        this.simulateCombat();
    }
    
    simulateCombat() {
        let result = null;
        let attackCount = 0;
        
        const combatLoop = setInterval(() => {
            result = combatSystem.playerAttack();
            attackCount++;
            
            if (result && result.victory !== null) {
                clearInterval(combatLoop);
                
                if (result.victory) {
                    this.gameDisplayText.setText(
                        '🎉 VICTORY!\n\n' +
                        'You have defeated the enemy!\n' +
                        'Quest completed!'
                    );
                    questSystem.completeQuest('tutorial_quest');
                } else {
                    this.gameDisplayText.setText(
                        '💀 DEFEAT!\n\n' +
                        'You have been defeated!\n' +
                        'But don\'t give up!'
                    );
                }
            } else {
                this.gameDisplayText.setText(
                    `Combat Round ${attackCount}\n\n` +
                    `${combatSystem.currentEnemy.name} HP: ${combatSystem.currentEnemy.hp}\n` +
                    `Your HP: ${player.hp}`
                );
            }
        }, 1000);
    }
    
    viewInventory() {
        inventorySystem.printInventory();
        const stats = inventorySystem.getInventoryStats();
        this.gameDisplayText.setText(
            `📦 INVENTORY (${stats.totalItems}/${stats.maxSlots})\n\n` +
            `Weapons: ${stats.weapons}\n` +
            `Armor: ${stats.armor}\n` +
            `Consumables: ${stats.consumables}\n` +
            `Accessories: ${stats.accessories}`
        );
    }
    
    viewQuests() {
        const quests = questSystem.getActiveQuests();
        let text = `📋 ACTIVE QUESTS (${quests.length})\n\n`;
        quests.forEach((quest, i) => {
            text += `${i + 1}. ${quest.name}\n`;
        });
        this.gameDisplayText.setText(text);
    }
    
    showStatus() {
        this.gameDisplayText.setText(player.getStatus());
    }
    
    update() {
        // Update player stats display
        this.playerStatsTexts.name.setText(`Name: ${player.name}`);
        this.playerStatsTexts.level.setText(`Level: ${player.level}`);
        this.playerStatsTexts.hp.setText(`HP: ${player.hp}/${player.maxHp}`);
        this.playerStatsTexts.mana.setText(`Mana: ${player.mana}/${player.maxMana}`);
        this.playerStatsTexts.coins.setText(`Coins: ${player.coins}`);
        this.playerStatsTexts.exp.setText(`EXP: ${player.exp}/${player.expToLevel}`);
    }
}