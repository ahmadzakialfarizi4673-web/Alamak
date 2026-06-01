// Player System - The Seksi Famsoi

class Player {
    constructor() {
        this.name = 'Cyber Agent';
        this.level = 1;
        this.xp = 0;
        this.maxXp = 100;
        this.health = 100;
        this.maxHealth = 100;
        this.mana = 50;
        this.maxMana = 50;
        this.credits = 1000;
        
        // Stats
        this.stats = {
            strength: 10,
            dexterity: 8,
            intelligence: 7,
            endurance: 9
        };
        
        // Equipment
        this.equipment = {
            weapon: null,
            armor: null,
            accessory: null
        };
        
        // Inventory
        this.inventory = [];
        
        // Position
        this.x = 400;
        this.y = 300;
        this.speed = 200;
    }
    
    gainXP(amount) {
        this.xp += amount;
        if (this.xp >= this.maxXp) {
            this.levelUp();
        }
    }
    
    levelUp() {
        this.level++;
        this.xp = 0;
        this.maxXp = this.maxXp * 1.1;
        this.maxHealth += 20;
        this.health = this.maxHealth;
        this.maxMana += 10;
        this.mana = this.maxMana;
        console.log('Level up! Now level ' + this.level);
    }
    
    takeDamage(amount) {
        const defense = this.getDefense();
        const finalDamage = Math.max(1, amount - defense);
        this.health -= finalDamage;
        if (this.health < 0) this.health = 0;
        return finalDamage;
    }
    
    heal(amount) {
        this.health += amount;
        if (this.health > this.maxHealth) this.health = this.maxHealth;
    }
    
    getAttackPower() {
        let power = this.stats.strength * 2;
        if (this.equipment.weapon) {
            power += this.equipment.weapon.damage || 0;
        }
        return power;
    }
    
    getDefense() {
        let defense = 0;
        if (this.equipment.armor) {
            defense += this.equipment.armor.defense || 0;
        }
        return defense;
    }
    
    equipItem(item) {
        if (!item) return false;
        
        if (item.type === 'weapon') {
            this.equipment.weapon = item;
            return true;
        }
        if (item.type === 'armor') {
            this.equipment.armor = item;
            return true;
        }
        if (item.type === 'accessory') {
            this.equipment.accessory = item;
            return true;
        }
        return false;
    }
    
    addInventoryItem(itemId) {
        const item = getItem(itemId);
        if (item) {
            this.inventory.push(item);
            return true;
        }
        return false;
    }
}

const player = new Player();
