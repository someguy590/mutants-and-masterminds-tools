import heroCreator3e, {
    editHeroDetail,
    editIdentityStatus,
    editPowerLevel,
    editAbility,
    editDefenseCost,
    editSkill,
    editCustomSkillText
} from './heroCreator3eSlice';

describe('heroCreator3e reducer', () => {
    it('should handle editing hero details', () => {
        expect(heroCreator3e({ heroName: '' }, editHeroDetail({
            detail: 'heroName',
            detailValue: 'Jon the Baton'
        }))).toEqual({ heroName: 'Jon the Baton' });
    });

    it('should handle editing identity status', () => {
        expect(heroCreator3e({ isIdentitySecret: true }, editIdentityStatus())).toEqual({ isIdentitySecret: false });
    });

    it('should handle editing power level', () => {
        expect(heroCreator3e({ powerLevel: 10 }, editPowerLevel(5))).toEqual({ powerLevel: 5 });
    });

    it('should handle editing abilities', () => {
        const state = {
            agility: 5,
            abilityPoints: 140,
            abilitiesCost: 10,
            dodge: 5,
            skills: {
                acrobatics: {
                    total: 5,
                    ability: 5,
                    ranks: 0
                },
                stealth: {
                    total: 10,
                    ability: 5,
                    ranks: 5

                }
            }
        };
        expect(
            heroCreator3e(
                state,
                editAbility({
                    ability: 'agility',
                    amount: 10
                }))
        ).toEqual({
            agility: 10,
            abilityPoints: 130,
            abilitiesCost: 20,
            dodge: 10,
            skills: {
                acrobatics: {
                    total: 10,
                    ability: 10,
                    ranks: 0
                },
                stealth: {
                    total: 15,
                    ability: 10,
                    ranks: 5
                }
            }
        });
    });

    it('should handle editing defenses cost', () => {
        const state = {
            will: 2,
            willCost: 2,
            abilityPoints: 148,
            defensesCost: 2
        };

        expect(
            heroCreator3e(
                state,
                editDefenseCost({
                    defense: 'will',
                    newAmount: 10,
                }))
        ).toEqual({
            will: 10,
            willCost: 10,
            abilityPoints: 140,
            defensesCost: 10
        });
    });

    it('should handle editing skill ranks', () => {
        const state = {
            skills: {
                acrobatics: {
                    total: 3,
                    ranks: 3,
                    ability: 0,
                    other: 0
                }
            },
            abilityPoints: 148,
            skillsCost: 2,
            totalSkills: 3
        };

        expect(
            heroCreator3e(
                state,
                editSkill({
                    skill: 'acrobatics',
                    newAmount: 5,
                    isRanks: true
                }))
        ).toEqual({
            skills: {
                acrobatics: {
                    total: 5,
                    ranks: 5,
                    ability: 0,
                    other: 0
                }
            },
            abilityPoints: 147,
            skillsCost: 3,
            totalSkills: 5
        });
    });

    it('should handle editing skill others', () => {
        const state = {
            skills: {
                acrobatics: {
                    total: 3,
                    ranks: 3,
                    ability: 0,
                    other: 0
                }
            },
            abilityPoints: 148,
            skillsCost: 2,
            totalSkills: 3
        };

        expect(
            heroCreator3e(
                state,
                editSkill({
                    skill: 'acrobatics',
                    newAmount: 5,
                    isRanks: false
                }))
        ).toEqual({
            skills: {
                acrobatics: {
                    total: 8,
                    ranks: 3,
                    ability: 0,
                    other: 5
                }
            },
            abilityPoints: 148,
            skillsCost: 2,
            totalSkills: 3
        });
    });

    it('should handle editing custom skill text', () => {
        expect(
            heroCreator3e({
                skills: {
                    customSkill0: {
                        text: ''
                    }
                }
            },
                editCustomSkillText({
                    skill: 'customSkill0',
                    text: 'Extendo Fist'
                }))
        ).toEqual({
            skills: {
                customSkill0: {
                    text: 'Extendo Fist'
                }
            }
        });
    });
});