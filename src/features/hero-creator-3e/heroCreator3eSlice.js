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

export default heroCreator3eSlice.reducer;

