// Quest System - The Seksi Famsoi

class QuestSystem {
    constructor() {
        this.activeQuests = [];
        this.completedQuests = [];
    }
    
    startQuest(questId) {
        const quest = getQuest(questId);
        if (!quest) {
            console.log('❌ Quest not found!');
            return false;
        }
        
        if (quest.prerequisite && !this.completedQuests.includes(quest.prerequisite)) {
            console.log(`❌ Cannot start quest. Required: ${getQuest(quest.prerequisite).name}`);
            return false;
        }
        
        if (!this.activeQuests.includes(questId)) {
            this.activeQuests.push(questId);
            player.addQuest(questId);
            console.log(`✅ Quest Started: ${quest.name}`);
            console.log(`   ${quest.description}`);
            console.log(`   Objectives:`);
            quest.objectives.forEach((obj, i) => {
                console.log(`   ${i + 1}. ${obj}`);
            });
            return true;
        }
        
        return false;
    }
    
    completeQuest(questId) {
        const quest = getQuest(questId);
        if (!quest) return false;
        
        const index = this.activeQuests.indexOf(questId);
        if (index > -1) {
            this.activeQuests.splice(index, 1);
            this.completedQuests.push(questId);
            player.completeQuest(questId);
            
            console.log(`\n🎁 QUEST COMPLETED: ${quest.name}`);
            console.log(`   Reward: ${quest.reward.exp} EXP`);
            console.log(`   Reward: ${quest.reward.coins} Coins`);
            if (quest.reward.items) {
                console.log(`   Items: ${quest.reward.items.join(', ')}`);
            }
            
            return true;
        }
        
        return false;
    }
    
    abandonQuest(questId) {
        const quest = getQuest(questId);
        const index = this.activeQuests.indexOf(questId);
        
        if (index > -1) {
            this.activeQuests.splice(index, 1);
            console.log(`❌ Quest Abandoned: ${quest.name}`);
            return true;
        }
        
        return false;
    }
    
    getActiveQuests() {
        return this.activeQuests.map(id => getQuest(id));
    }
    
    getCompletedQuests() {
        return this.completedQuests.map(id => getQuest(id));
    }
    
    printActiveQuests() {
        console.log(`\n📋 ACTIVE QUESTS (${this.activeQuests.length})`);
        
        this.getActiveQuests().forEach((quest, i) => {
            console.log(`\n   ${i + 1}. ${quest.name}`);
            console.log(`      ${quest.description}`);
            console.log(`      Objectives:`);
            quest.objectives.forEach(obj => {
                console.log(`         ☐ ${obj}`);
            });
        });
    }
    
    printCompletedQuests() {
        console.log(`\n✅ COMPLETED QUESTS (${this.completedQuests.length})`);
        
        this.getCompletedQuests().forEach((quest, i) => {
            console.log(`   ${i + 1}. ${quest.name}`);
        });
    }
    
    getQuestsFromNPC(npcId) {
        const npc = getNPC(npcId);
        if (!npc || !npc.quests) return [];
        
        return npc.quests.map(id => getQuest(id));
    }
}

// Create global quest system
let questSystem = new QuestSystem();