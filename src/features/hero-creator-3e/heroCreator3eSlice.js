import { createSlice } from '@reduxjs/toolkit';

const heroCreator3eSlice = createSlice({
    name: 'heroCreator3e',
    initialState: {
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
        willCost: 0
    },
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
        },
        editDefense(state, action) {

        },
        editSkill(state, action) {

        }
    }
});

export const {
    editHeroDetail,
    editIdentityStatus,
    editPowerLevel,
    editAbility,
    editDefense,
    editSkill
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

export default heroCreator3eSlice.reducer;

