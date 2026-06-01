// Quests Database - The Seksi Famsoi

const QUESTS = {
    'quest_001': {
        id: 'quest_001',
        title: 'First Assignment',
        description: 'Defeat 5 security drones',
        type: 'combat',
        objectives: [
            { type: 'defeat', target: 'security_drone', count: 5 }
        ],
        rewards: {
            xp: 100,
            credits: 500,
            items: ['cyber_sword']
        },
        completed: false
    },
    'quest_002': {
        id: 'quest_002',
        title: 'Collect Data Chips',
        description: 'Find 3 data chips in the sector',
        type: 'collection',
        objectives: [
            { type: 'collect', target: 'data_chip', count: 3 }
        ],
        rewards: {
            xp: 150,
            credits: 750,
            items: ['plasma_rifle']
        },
        completed: false
    }
};

function getQuest(questId) {
    return QUESTS[questId] || null;
}
