// abilities
export const strength = 'Strength';
export const agility = 'Agility';
export const fighting = 'Fighting';
export const awareness = 'Awareness';
export const stamina = 'Stamina';
export const dexterity = 'Dexterity';
export const intellect = 'Intellect';
export const presence = 'Presence';

export const strengthId = 'strength';
export const agilityId = 'agility';
export const fightingId = 'fighting';
export const awarenessId = 'awareness';
export const staminaId = 'stamina';
export const dexterityId = 'dexterity';
export const intellectId = 'intellect';
export const presenceId = 'presence';

// defenses
export const dodge = 'Dodge';
export const parry = 'Parry';
export const fortitude = 'Fortitude';
export const toughness = 'Toughness';
export const will = 'Will';

export const dodgeId = 'dodge';
export const parryId = 'parry';
export const fortitudeId = 'fortitude';
export const toughnessId = 'toughness';
export const willId = 'will';

// skills
export const acrobatics = 'Acrobatics';
export const athletics = 'Athletics';
export const closeCombat = 'Close Combat';
export const deception = 'Deception';
export const expertise = 'Expertise';
export const insight = 'Insight';
export const intimidation = 'Intimidation';
export const investigation = 'Investigation';
export const perception = 'Perception';
export const persuation = 'Persuation';
export const rangedCombat = 'Ranged Combat';
export const sleightOfHand = 'Sleight Of Hand';
export const stealth = 'Stealth';
export const technology = 'Technology';
export const vehicles = 'Vehicles';
export const customSkill0 = '';
export const customSkill1 = '';
export const customSkill2 = '';
export const customSkill3 = '';
export const customSkill4 = '';
export const customSkill5 = '';
export const customSkill6 = '';
export const customSkill7 = '';
export const customSkill8 = '';
export const customSkill9 = '';

export const acrobaticsId = 'acrobatics';
export const athleticsId = 'athletics';
export const closeCombatId = 'closeCombat';
export const deceptionId = 'deception';
export const expertiseId = 'expertise';
export const insightId = 'insight';
export const intimidationId = 'intimidation';
export const investigationId = 'investigation';
export const perceptionId = 'perception';
export const persuationId = 'persuation';
export const rangedCombatId = 'rangedCombat';
export const sleightOfHandId = 'sleightOfHand';
export const stealthId = 'stealth';
export const technologyId = 'technology';
export const vehiclesId = 'vehicles';
export const customSkill0Id = 'customSkill0';
export const customSkill1Id = 'customSkill1';
export const customSkill2Id = 'customSkill2';
export const customSkill3Id = 'customSkill3';
export const customSkill4Id = 'customSkill4';
export const customSkill5Id = 'customSkill5';
export const customSkill6Id = 'customSkill6';
export const customSkill7Id = 'customSkill7';
export const customSkill8Id = 'customSkill8';
export const customSkill9Id = 'customSkill9';

export const abilities = [

];

export const defenses = [

];

export const skills = [
    acrobatics,
    athletics,
    closeCombat,
    deception,
    expertise,
    insight,
    intimidation,
    investigation,
    perception,
    persuation,
    rangedCombat,
    sleightOfHand,
    stealth,
    technology,
    vehicles
];

export const normalSkills = {
    acrobatics,
    athletics,
    deception,
    insight,
    intimidation,
    investigation,
    perception,
    persuation,
    sleightOfHand,
    stealth,
    technology,
    vehicles
};

export const specifiedSkills = {
    closeCombat,
    expertise,
    rangedCombat,
};

export const skillHeaders = [
    'Skills',
    'Total',
    'Ability',
    'Ranks',
    'Other'
];

export const strings = {
    abilities: {
        strength,
        agility,
        fighting,
        awareness,
        stamina,
        dexterity,
        intellect,
        presence
    },
    defenses: {
        dodge,
        parry,
        fortitude,
        toughness,
        will
    },
    skills: {
        acrobatics,
        athletics,
        closeCombat,
        customSkill0: '',
        customSkill1: '',
        customSkill2: '',
        deception,
        expertise,
        customSkill3: '',
        customSkill4: '',
        customSkill5: '',
        insight,
        intimidation,
        investigation,
        perception,
        persuation,
        rangedCombat,
        customSkill6: '',
        customSkill7: '',
        customSkill8: '',
        sleightOfHand,
        stealth,
        technology,
        vehicles
    }
};

export const skillIds = [
    ...Object.keys(strings.skills)
];

export const normalSkillIds = [
    ...Object.keys(normalSkills)
];

export const specifiedSkillIds = [
    ...Object.keys(specifiedSkills)
];

export const skillsByAbilities = {
    [strengthId]: [
        athleticsId
    ],
    [agilityId]: [
        acrobaticsId, stealthId
    ],
    [fightingId]: [
        customSkill0Id, customSkill1Id, customSkill2Id
    ],
    [awarenessId]: [
        insightId, perceptionId
    ],
    [staminaId]: [],
    [dexterityId]: [
        customSkill6Id, customSkill7Id, customSkill8Id
    ],
    [intellectId]: [
        customSkill3Id, customSkill4Id, customSkill5Id, investigationId, technologyId, vehiclesId
    ],
    [presenceId]: [
        deceptionId, intimidationId, persuationId
    ],
}