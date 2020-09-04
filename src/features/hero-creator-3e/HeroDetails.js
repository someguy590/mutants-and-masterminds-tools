import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editHeroDetail, editIdentityStatus, editPowerLevel } from './heroCreator3eSlice';

export const HeroDetails = () => {
    const dispatch = useDispatch();

    const heroName = useSelector(state => state.heroCreator3e.heroName);
    const playerName = useSelector(state => state.heroCreator3e.playerName);
    const identity = useSelector(state => state.heroCreator3e.identity);
    const isIdentitySecret = useSelector(state => state.heroCreator3e.isIdentitySecret);

    const gender = useSelector(state => state.heroCreator3e.gender);
    const age = useSelector(state => state.heroCreator3e.age);
    const height = useSelector(state => state.heroCreator3e.height);
    const weight = useSelector(state => state.heroCreator3e.weight);
    const eyes = useSelector(state => state.heroCreator3e.eyes);
    const hair = useSelector(state => state.heroCreator3e.hair);
    const groupAffiliation = useSelector(state => state.heroCreator3e.groupAffiliation);
    const baseOfOperations = useSelector(state => state.heroCreator3e.baseOfOperations);

    const powerLevel = useSelector(state => state.heroCreator3e.powerLevel);
    const abilitiesCost = useSelector(state => state.heroCreator3e.abilitiesCost);
    const powersCost = useSelector(state => state.heroCreator3e.powersCost);
    const advantagesCost = useSelector(state => state.heroCreator3e.advantagesCost);
    const skillsCost = useSelector(state => state.heroCreator3e.skillsCost);
    const defensesCost = useSelector(state => state.heroCreator3e.defensesCost);
    const abilityPointTotals = abilitiesCost + powersCost + advantagesCost + skillsCost + defensesCost;

    const handleEditHeroDetailChange = e => dispatch(editHeroDetail({ detail: e.target.id, detailValue: e.target.value }));
    const handleIdentityStatus = () => dispatch(editIdentityStatus());
    const handlePowerLevelChange = (e) => dispatch(editPowerLevel(Number(e.target.value)));

    return (
        <div>
            <label htmlFor="heroName">Hero:</label>
            <input id="heroName" type="text" onChange={handleEditHeroDetailChange} value={heroName} />
            <label htmlFor="playerName">Player:</label>
            <input id="playerName" type="text" onChange={handleEditHeroDetailChange} value={playerName} />

            <label htmlFor="identity">Identity:</label>
            <input id="identity" type="text" onChange={handleEditHeroDetailChange} value={identity} />
            <fieldset>
                <input id="secret" type="radio" name="identity" onChange={handleIdentityStatus} checked={isIdentitySecret} />
                <label htmlFor="secret">Secret</label>
                <input id="public" type="radio" name="identity" onChange={handleIdentityStatus} checked={!isIdentitySecret} />
                <label htmlFor="public">Public</label>
            </fieldset>

            <label htmlFor="gender">Gender:</label>
            <input id="gender" type="text" onChange={handleEditHeroDetailChange} value={gender} />
            <label htmlFor="age">Age:</label>
            <input id="age" type="text" onChange={handleEditHeroDetailChange} value={age} />
            <label htmlFor="height">Height:</label>
            <input id="height" type="text" onChange={handleEditHeroDetailChange} value={height} />
            <label htmlFor="weight">Weight:</label>
            <input id="weight" type="text" onChange={handleEditHeroDetailChange} value={weight} />
            <label htmlFor="eyes">Eyes:</label>
            <input id="eyes" type="text" onChange={handleEditHeroDetailChange} value={eyes} />
            <label htmlFor="hair">Hair:</label>
            <input id="hair" type="text" onChange={handleEditHeroDetailChange} value={hair} />
            <label htmlFor="groupAffiliation">Group Affiliation:</label>
            <input id="groupAffiliation" type="text" onChange={handleEditHeroDetailChange} value={groupAffiliation} />
            <label htmlFor="baseOfOperations">Base Of Operations:</label>
            <input id="baseOfOperations" type="text" onChange={handleEditHeroDetailChange} value={baseOfOperations} />

            <label htmlFor="powerLevel">Power Level:</label>
            <input id="powerLevel" type="number" min="0" value={powerLevel} onChange={handlePowerLevelChange} />

            <span>Ability Point Totals: Abilities {abilitiesCost} + Powers {powersCost} + Advantages {advantagesCost} + Skills {skillsCost} + Defenses {defensesCost} = {abilityPointTotals}</span>
        </div>
    );
}
