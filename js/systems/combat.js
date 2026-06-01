// Combat System - The Seksi Famsoi

class Enemy {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.health = 30;
        this.maxHealth = 30;
        this.damage = 5;
        this.xpReward = 25;
        this.sprite = null;
    }
    
    takeDamage(amount) {
        this.health -= amount;
        return this.health <= 0;
    }
    
    getDamage() {
        return this.damage + Math.floor(Math.random() * 3);
    }
}

class CombatSystem {
    constructor() {
        this.inCombat = false;
        this.currentEnemy = null;
    }
    
    startCombat(enemy) {
        this.inCombat = true;
        this.currentEnemy = enemy;
        console.log('Combat started with ' + enemy.type);
    }
    
    endCombat() {
        this.inCombat = false;
        this.currentEnemy = null;
    }
    
    playerAttack() {
        if (!this.currentEnemy) return 0;
        
        const damage = player.getAttackPower() + Math.floor(Math.random() * 5);
        const isDead = this.currentEnemy.takeDamage(damage);
        
        if (isDead) {
            player.gainXP(this.currentEnemy.xpReward);
            player.credits += 100;
            this.endCombat();
        }
        
        return damage;
    }
    
    enemyAttack() {
        if (!this.currentEnemy) return 0;
        
        const damage = this.currentEnemy.getDamage();
        const actualDamage = player.takeDamage(damage);
        
        if (player.health <= 0) {
            console.log('Player defeated!');
        }
        
        return actualDamage;
    }
}

const combatSystem = new CombatSystem();
