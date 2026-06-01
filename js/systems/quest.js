// Quest System - The Seksi Famsoi

class QuestSystem {
    constructor() {
        this.activeQuests = [];
        this.completedQuests = [];
    }
    
    startQuest(questId) {
        const quest = getQuest(questId);
        if (!quest || this.activeQuests.find(q => q.id === questId)) {
            return false;
        }
        
        this.activeQuests.push(JSON.parse(JSON.stringify(quest)));
        console.log('Quest started: ' + quest.title);
        return true;
    }
    
    updateQuestProgress(questId, objectiveIndex, progress) {
        const quest = this.activeQuests.find(q => q.id === questId);
        if (!quest) return false;
        
        if (quest.objectives[objectiveIndex]) {
            quest.objectives[objectiveIndex].progress = progress;
        }
        
        return this.checkQuestCompletion(questId);
    }
    
    checkQuestCompletion(questId) {
        const quest = this.activeQuests.find(q => q.id === questId);
        if (!quest) return false;
        
        const allComplete = quest.objectives.every(obj => obj.progress >= obj.count);
        
        if (allComplete && !quest.completed) {
            this.completeQuest(questId);
            return true;
        }
        
        return false;
    }
    
    completeQuest(questId) {
        const questIndex = this.activeQuests.findIndex(q => q.id === questId);
        if (questIndex === -1) return false;
        
        const quest = this.activeQuests[questIndex];
        quest.completed = true;
        
        // Apply rewards
        if (quest.rewards) {
            player.gainXP(quest.rewards.xp || 0);
            player.credits += quest.rewards.credits || 0;
            
            if (quest.rewards.items) {
                quest.rewards.items.forEach(itemId => {
                    inventorySystem.addItem(itemId);
                });
            }
        }
        
        this.completedQuests.push(quest);
        this.activeQuests.splice(questIndex, 1);
        
        console.log('Quest completed: ' + quest.title);
        return true;
    }
    
    getActiveQuests() {
        return this.activeQuests;
    }
}

const questSystem = new QuestSystem();
