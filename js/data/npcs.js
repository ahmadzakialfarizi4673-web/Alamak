// NPCs Database - The Seksi Famsoi

const NPCS = {
    'merchant_0': {
        id: 'merchant_0',
        name: 'Neon Dealer',
        type: 'merchant',
        x: 400,
        y: 300,
        dialogue: 'Looking for some gear? I got the best deals in the sector.',
        items: ['cyber_sword', 'health_pack', 'mana_potion']
    },
    'guard_0': {
        id: 'guard_0',
        name: 'Security Bot',
        type: 'npc',
        x: 200,
        y: 200,
        dialogue: 'Move along, citizen.',
        hostile: false
    },
    'quest_giver_0': {
        id: 'quest_giver_0',
        name: 'Mission Control',
        type: 'quest_giver',
        x: 600,
        y: 350,
        dialogue: 'We have a job for you. Interested?'
    }
};

function getNPC(npcId) {
    return NPCS[npcId] || null;
}
