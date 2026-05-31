// Player System - The Seksi Famsoi

class Player {
    constructor(name = 'Hero') {
        this.name = name;
        this.level = 1;
        this.exp = 0;
        this.expToLevel = 1000;
        
        // Stats
        this.maxHp = 100;
        this.hp = 100;
        this.maxMana = 50;
        this.mana = 50;
        
        // Attributes
        this.strength = 10;
        this.intelligence = 8;
        this.dexterity = 10;
        this.defense = 5;
        
        // Equipment
        this.weapon = null;
        this.armor = null;
        this.accessory = null;
        
        // Resources
        this.coins = 500;
        this.inventory = [];
        this.quests = [];
        this.completedQuests = [];
        
        // Combat
        this.inCombat = false;
        this.currentEnemy = null;
    }
    
    // Level up system
    addExp(amount) {
        this.exp += amount;
        console.log(`+${amount} EXP`);
        
        if (this.exp >= this.expToLevel) {
            this.levelUp();
        }
    }
    
    levelUp() {
        this.level++;
        this.exp = 0;
        this.expToLevel = Math.floor(this.expToLevel * 1.15);
        
        // Increase stats
        this.maxHp += 20;
        this.hp = this.maxHp;
        this.maxMana += 10;
        this.mana = this.maxMana;
        this.strength += 3;
        this.intelligence += 2;
        this.defense += 2;
        
        console.log(`🎉 LEVEL UP! Level ${this.level}`);
    }
    
    // Equipment management
    equipWeapon(itemId) {
        const item = getItem(itemId);
        if (item && item.type === 'weapon') {
            this.weapon = item;
            console.log(`⚔️ Equipped: ${item.name}`);
            return true;
        }
        return false;
    }
    
    equipArmor(itemId) {
        const item = getItem(itemId);
        if (item && item.type === 'armor') {
            this.armor = item;
            console.log(`🛡️ Equipped: ${item.name}`);
            return true;
        }
        return false;
    }
    
    // Calculate total damage
    getTotalDamage() {
        let damage = this.strength * 2;
        if (this.weapon) {
            damage += this.weapon.damage;
        }
        return Math.max(1, damage);
    }
    
    // Calculate total defense
    getTotalDefense() {
        let defense = this.defense;
        if (this.armor) {
            defense += this.armor.defense;
        }
        return defense;
    }
    
    // Health management
    takeDamage(damage) {
        const defense = this.getTotalDefense();
        const actualDamage = Math.max(1, damage - Math.floor(defense / 2));
        this.hp -= actualDamage;
        
        if (this.hp < 0) this.hp = 0;
        
        console.log(`💥 Took ${actualDamage} damage! (HP: ${this.hp}/${this.maxHp})`);
        return actualDamage;
    }
    
    heal(amount) {
        const healed = Math.min(amount, this.maxHp - this.hp);
        this.hp += healed;
        console.log(`💚 Healed ${healed} HP`);
    }
    
    // Inventory management
    addItem(itemId, quantity = 1) {
        const item = getItem(itemId);
        if (item) {
            for (let i = 0; i < quantity; i++) {
                this.inventory.push({ ...item, id: Math.random() });
            }
            console.log(`📦 Added ${quantity}x ${item.name}`);
        }
    }
    
    removeItem(itemId) {
        const index = this.inventory.findIndex(i => i.id === itemId);
        if (index > -1) {
            this.inventory.splice(index, 1);
        }
    }
    
    // Quest management
    addQuest(questId) {
        const quest = getQuest(questId);
        if (quest) {
            this.quests.push(questId);
            console.log(`📋 Quest Added: ${quest.name}`);
        }
    }
    
    completeQuest(questId) {
        const quest = getQuest(questId);
        if (quest) {
            const index = this.quests.indexOf(questId);
            if (index > -1) {
                this.quests.splice(index, 1);
            }
            this.completedQuests.push(questId);
            
            // Reward
            this.addExp(quest.reward.exp);
            this.coins += quest.reward.coins;
            if (quest.reward.items) {
                quest.reward.items.forEach(item => this.addItem(item));
            }
            
            console.log(`🎁 Quest Complete: ${quest.name}`);
            console.log(`   EXP: +${quest.reward.exp}, Coins: +${quest.reward.coins}`);
        }
    }
    
    // Save/Load
    save() {
        return JSON.stringify({
            name: this.name,
            level: this.level,
            exp: this.exp,
            hp: this.hp,
            mana: this.mana,
            coins: this.coins,
            quests: this.quests,
            completedQuests: this.completedQuests
        });
    }
    
    getStatus() {
        return `
            ===== ${this.name} =====
            Level: ${this.level} | EXP: ${this.exp}/${this.expToLevel}
            HP: ${this.hp}/${this.maxHp} | Mana: ${this.mana}/${this.maxMana}
            STR: ${this.strength} | INT: ${this.intelligence} | DEF: ${this.defense}
            Coins: ${this.coins}
            Weapon: ${this.weapon ? this.weapon.name : 'None'}
            Armor: ${this.armor ? this.armor.name : 'None'}
        `;
    }
}

// Create global player instance
let player = new Player('The Seksi Famsoi');