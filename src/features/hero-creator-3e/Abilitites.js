import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editAbility } from './heroCreator3eSlice';

export const Abilitites = () => {
    const dispatch = useDispatch();

    const strength = useSelector(state => state.heroCreator3e.strength);

    const handleAbilityChange = (e) => {
        dispatch(editAbility({ability: e.target.id, amount: Number(e.target.value)}));
    };

    return (
        <div>
            <label htmlFor="strength">Strength</label>
            <input id="strength" type="number" name="strength" onChange={handleAbilityChange} value={strength} />
            <label htmlFor="agility">Agility</label>
            <input id="agility" type="number" />
            <label htmlFor="fighting">Fighting</label>
            <input id="fighting" type="number" />
            <label htmlFor="awareness">Awareness</label>
            <input id="awareness" type="number" />
            <label htmlFor="stamina">Stamina</label>
            <input id="stamina" type="number" />
            <label htmlFor="dexterity">Dexterity</label>
            <input id="dexterity" type="number" />
            <label htmlFor="intellect">Intellect</label>
            <input id="intellect" type="number" />
            <label htmlFor="presence">Presence</label>
            <input id="presence" type="number" />
        </div>
    );
}
