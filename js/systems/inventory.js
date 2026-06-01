// Inventory System - The Seksi Famsoi

class InventorySystem {
    constructor(maxSlots = 20) {
        this.maxSlots = maxSlots;
        this.items = [];
    }
    
    addItem(itemId) {
        if (this.items.length >= this.maxSlots) {
            console.log('Inventory full!');
            return false;
        }
        
        const item = getItem(itemId);
        if (!item) return false;
        
        this.items.push(item);
        console.log('Added ' + item.name + ' to inventory');
        return true;
    }
    
    removeItem(index) {
        if (index < 0 || index >= this.items.length) return null;
        return this.items.splice(index, 1)[0];
    }
    
    getItemByIndex(index) {
        return this.items[index] || null;
    }
    
    useItem(index) {
        const item = this.getItemByIndex(index);
        if (!item) return false;
        
        if (item.type === 'consumable') {
            if (item.effect === 'heal') {
                player.heal(item.value);
            } else if (item.effect === 'mana') {
                player.mana += item.value;
                if (player.mana > player.maxMana) player.mana = player.maxMana;
            }
            this.removeItem(index);
            return true;
        }
        
        return false;
    }
    
    equipItem(index) {
        const item = this.getItemByIndex(index);
        if (!item) return false;
        
        return player.equipItem(item);
    }
    
    getInventoryList() {
        return this.items;
    }
}

const inventorySystem = new InventorySystem();
