# 🔥 The Seksi Famsoi - Cyberpunk RPG Engine 🔥

A complete RPG game engine built with **Phaser 3** and **JavaScript**. A badass cyberpunk-themed game with full combat, inventory, quest, and leveling systems.

## ⚡ Features

### 🎮 Core Gameplay
- ✅ **Turn-based Combat System** - Fight enemies with tactical choices
- ✅ **Character Progression** - Level up and boost stats
- ✅ **Equipment System** - Weapons and armor with stat bonuses
- ✅ **Inventory Management** - Collect and manage items
- ✅ **Quest System** - Complete quests for rewards
- ✅ **NPC Interactions** - Dialogue with NPCs and merchants
- ✅ **Skill System** - Use special abilities in combat
- ✅ **Save/Load System** - Progress tracking

### 🎨 Cyberpunk Theme
- Futuristic neon green UI with glow effects
- Cyberpunk sound design (ready for audio)
- Immersive grid-based background
- Badass visual effects and transitions

### 📊 Systems Implemented
- **Player System** - Character stats, leveling, equipment
- **Combat System** - Enemy AI, damage calculation, skill usage
- **Inventory System** - Item management and usage
- **Quest System** - Quest tracking and rewards
- **Game Scenes** - Boot, Menu, and Main Game scenes

## 🚀 How to Play

1. **Open `index.html`** in your browser
2. **Click START GAME** to begin
3. **Choose your action:**
   - START TUTORIAL - Fight training dummy
   - FIGHT BOSS - Battle the final boss
   - VIEW INVENTORY - Check your items
   - VIEW QUESTS - Track missions
   - STATUS - See your character stats

### Combat Controls
- Attacks are automatic in tutorial mode
- Manual control in full game
- Use items from inventory to heal or buff

## 📁 Project Structure

```
Alamak/
├── index.html                 # Main HTML entry point
├── css/
│   └── style.css              # Cyberpunk styling
├── js/
│   ├── game.js                # Phaser configuration
│   ├── data/
│   │   ├── items.js           # Items database
│   │   ├── npcs.js            # NPC definitions
│   │   └── quests.js          # Quest definitions
│   ├── systems/
│   │   ├── player.js          # Player character class
│   │   ├── combat.js          # Combat system
│   │   ├── inventory.js       # Inventory management
│   │   └── quest.js           # Quest tracking
│   └── scenes/
│       ├── bootScene.js       # Boot/loading scene
│       ├── menuScene.js       # Main menu
│       └── gameScene.js       # Main game scene
└── README.md                  # This file
```

## 🎯 Game Systems

### Player System
- Level-based progression
- Stats: Strength, Intelligence, Dexterity, Defense
- Equipment: Weapon, Armor, Accessories
- Inventory with 20 slots
- Coin economy

### Combat System
- Turn-based combat with enemy AI
- Damage calculation with variance
- Special skills (Power Strike, Heal, Fury)
- Experience and coin rewards
- Victory and defeat conditions

### Inventory System
- Manage weapons, armor, consumables
- Use items in or out of combat
- Equipment bonuses
- Item rarity levels (common, rare, epic)

### Quest System
- Active quest tracking
- Objectives and prerequisites
- Quest rewards (EXP, coins, items)
- Completed quest history

## 🛠️ Technologies Used
- **Phaser 3** - Game framework
- **Vanilla JavaScript** - Pure JS, no dependencies
- **HTML5** - Canvas rendering
- **CSS3** - Cyberpunk UI styling

## 🎮 NPCs & Bosses

### Main Characters
- **Mentor Zyx** - Trainer & quest giver
- **Merchant Kai** - Shop keeper
- **Boss Nero** - Final boss
- **Rival Cipher** - Story rival
- **Ancient Sage** - Lore keeper

## 💾 Save System
Progress is tracked in-memory. Implement localStorage for persistence:

```javascript
// Save
localStorage.setItem('savefile', player.save());

// Load
const saved = JSON.parse(localStorage.getItem('savefile'));
```

## 🔧 Customization

### Add New Items
Edit `js/data/items.js`:
```javascript
'new_weapon': {
    id: 'new_weapon',
    name: 'New Weapon',
    type: 'weapon',
    rarity: 'rare',
    damage: 50,
    // ...
}
```

### Add New NPCs
Edit `js/data/npcs.js` and add NPC definitions

### Add New Quests
Edit `js/data/quests.js` with quest objectives and rewards

### Customize UI
Modify `css/style.css` for different color schemes

## 🎨 Future Enhancements

- 🎨 Add sprite graphics and animations
- 🎵 Add background music and sound effects
- 🗺️ Implement dungeon/world exploration
- 👥 Add multiplayer/co-op
- 📱 Mobile optimization
- 💾 Cloud save system
- 🏪 Advanced shop system
- ⚔️ PvP combat arena
- 🔧 Item crafting system
- 🎓 Tutorial/help system

## 📝 License
Open source - feel free to modify and use!

## 🤝 Contributing
Feel free to fork and add features!

---

**Made with ❤️ and Code** 🔥

*The Seksi Famsoi - Where badass meets cyberpunk!*