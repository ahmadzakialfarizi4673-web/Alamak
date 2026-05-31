// Items Database - The Seksi Famsoi

const ITEMS = {
    // Weapons
    'cyber_sword': {
        id: 'cyber_sword',
        name: 'Cyber Sword',
        type: 'weapon',
        rarity: 'common',
        damage: 15,
        description: 'A futuristic blade with glowing edges',
        icon: '⚔️'
    },
    'plasma_rifle': {
        id: 'plasma_rifle',
        name: 'Plasma Rifle',
        type: 'weapon',
        rarity: 'rare',
        damage: 25,
        description: 'High-tech plasma weapon',
        icon: '🔫'
    },
    'laser_gun': {
        id: 'laser_gun',
        name: 'Laser Gun',
        type: 'weapon',
        rarity: 'epic',
        damage: 35,
        description: 'Devastating laser technology',
        icon: '💥'
    },

    // Armor
    'combat_suit': {
        id: 'combat_suit',
        name: 'Combat Suit',
        type: 'armor',
        rarity: 'common',
        defense: 10,
        description: 'Basic protective gear',
        icon: '🛡️'
    },
    'cyber_armor': {
        id: 'cyber_armor',
        name: 'Cyber Armor',
        type: 'armor',
        rarity: 'rare',
        defense: 20,
        description: 'Advanced cybernetic armor plating',
        icon: '🛡️'
    },
    'nano_suit': {
        id: 'nano_suit',
        name: 'Nano Suit',
        type: 'armor',
        rarity: 'epic',
        defense: 30,
        description: 'Nanotech adaptive armor',
        icon: '🛡️'
    },

    // Consumables
    'health_pack': {
        id: 'health_pack',
        name: 'Health Pack',
        type: 'consumable',
        rarity: 'common',
        effect: 'heal',
        value: 50,
        description: 'Restores 50 HP',
        icon: '💊'
    },
    'super_health_pack': {
        id: 'super_health_pack',
        name: 'Super Health Pack',
        type: 'consumable',
        rarity: 'rare',
        effect: 'heal',
        value: 150,
        description: 'Restores 150 HP',
        icon: '💊'
    },
    'mana_potion': {
        id: 'mana_potion',
        name: 'Mana Potion',
        type: 'consumable',
        rarity: 'common',
        effect: 'mana',
        value: 50,
        description: 'Restores 50 Mana',
        icon: '🧪'
    },

    // Accessories
    'cyber_ring': {
        id: 'cyber_ring',
        name: 'Cyber Ring',
        type: 'accessory',
        rarity: 'rare',
        stats: { strength: 5, intel: 3 },
        description: 'Increases attack power',
        icon: '💍'
    }
};

// Helper function to get item by ID
function getItem(itemId) {
    return ITEMS[itemId] || null;
}