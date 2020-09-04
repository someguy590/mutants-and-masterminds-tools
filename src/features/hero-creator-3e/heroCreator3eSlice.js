import { createSlice } from '@reduxjs/toolkit';
import { skillIds, strings, normalSkillIds, specifiedSkillIds } from 'resources/strings';

const skills = { ids: skillIds };
for (let id of skills.ids) {
    const skillType = getSkillType(id);
    if (skillType === 'normal') {
        skills[id] = {
            type: skillType,
            text: strings.skills[id],
            total: 0,
            ability: 0,
            ranks: 0,
            other: 0
        };
    }
    else if (skillType === 'header') {
        skills[id] = {
            type: skillType,
            text: strings.skills[id],
        };
    }
    else {
        skills[id] = {
            type: skillType,
            text: '',
            total: 0,
            ability: 0,
            ranks: 0,
            other: 0
        };
    }
}

const initialState = {
    plotPoints: 0,
    abilityPoints: 150,
    powerLevel: 10,
    abilitiesCost: 0,
    powersCost: 0,
    advantagesCost: 0,
    skillsCost: 0,
    defensesCost: 0,
    heroName: '',
    playerName: '',
    identity: '',
    isIdentitySecret: true,
    gender: '',
    age: '',
    height: '',
    weight: '',
    eyes: '',
    hair: '',
    groupAffiliation: '',
    baseOfOperations: '',
    strength: 0,
    agility: 0,
    fighting: 0,
    awareness: 0,
    stamina: 0,
    dexterity: 0,
    intellect: 0,
    presence: 0,
    dodge: 0,
    parry: 0,
    fortitude: 0,
    toughness: 0,
    will: 0,
    dodgeCost: 0,
    parryCost: 0,
    fortitudeCost: 0,
    willCost: 0,
    skills: skills
};



const heroCreator3eSlice = createSlice({
    name: 'heroCreator3e',
    initialState: initialState,
    reducers: {
        editHeroDetail(state, action) {
            const { detail, detailValue } = action.payload;
            state[detail] = detailValue;
        },
        editIdentityStatus(state, action) {
            state.isIdentitySecret = !state.isIdentitySecret;
        },
        editPowerLevel(state, action) {
            state.powerLevel = action.payload;
        },
        editAbility(state, action) {
            let { ability, amount } = action.payload;
            let prevAmount = state[ability];
            state[ability] = amount;

            amount = amount - prevAmount;
            state.abilityPoints -= amount * 2;
            state.abilitiesCost += amount * 2;
            for (const defense of getDefenseFromAbility(ability))
                state[defense] += amount;
        },
        editDefenseCost(state, action) {
            const { defense, newAmount } = action.payload;
            const defenseCost = state[defense + 'Cost'];
            const prevAmount = state[defense];

            const difference = newAmount - prevAmount;

            if (defenseCost + difference < 0)
                return;

            state[defense] = newAmount;
            state[defense + 'Cost'] += difference;
            state.abilityPoints -= difference;
            state.defensesCost += difference;
        },
        editSkill(state, action) {
            const { skill, newAmount, isRanks } = action.payload;
            if (isRanks) {
                const oldamount = state.skills[skill].ranks;
                const difference = newAmount - oldamount;
                if (difference < 0)
                    return;
                state.skills[skill].total += difference;
                state.skills[skill].ranks += difference;
                state.skillsCost += difference;
                state.abilityPoints -= difference;
            }
            else {
                const oldamount = state.skills[skill].other;
                const difference = newAmount - oldamount;
                state.skills[skill].total += difference;
                state.skills[skill].other += difference;
            }
        },
        editCustomSkillText(state, action) {
            const { skill, text } = action.payload;
            state.skills[skill].text = text;
        }
    }
});

export const {
    editHeroDetail,
    editIdentityStatus,
    editPowerLevel,
    editAbility,
    editDefenseCost,
    editSkill,
    editCustomSkillText
} = heroCreator3eSlice.actions;

export const selectAbilities3e = state => ({
    strength: state.heroCreator3e.strength,
    agility: state.heroCreator3e.agility,
    fighting: state.heroCreator3e.fighting,
    awareness: state.heroCreator3e.awareness,
    stamina: state.heroCreator3e.stamina,
    dexterity: state.heroCreator3e.dexterity,
    intellect: state.heroCreator3e.intellect,
    presence: state.heroCreator3e.presence
});

export const selectDefenses3e = state => ({
    dodge: state.heroCreator3e.dodge,
    parry: state.heroCreator3e.parry,
    fortitude: state.heroCreator3e.fortitude,
    toughness: state.heroCreator3e.toughness,
    will: state.heroCreator3e.will
});

export const selectDefenseCost3e = state => ({
    dodgeCost: state.heroCreator3e.dodgeCost,
    parryCost: state.heroCreator3e.parryCost,
    fortitudeCost: state.heroCreator3e.fortitudeCost,
    willCost: state.heroCreator3e.willCost
});

export const selectSkills3e = state => state.heroCreator3e.skills;

export default heroCreator3eSlice.reducer;

function getDefenseFromAbility(ability) {
    switch (ability) {
        case 'agility':
            return ['dodge'];
        case 'fighting':
            return ['parry'];
        case 'stamina':
            return ['fortitude', 'toughness'];
        case 'awareness':
            return ['will'];
        default:
            return [];
    }
};

function getSkillType(skill) {
    switch (true) {
        case (normalSkillIds.includes(skill)):
            return 'normal';
        case (specifiedSkillIds.includes(skill)):
            return 'header';
        default:
            return 'custom';
    }
}