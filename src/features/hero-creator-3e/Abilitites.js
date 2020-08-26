import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editAbility, selectAbilities3e } from './heroCreator3eSlice';

export const Abilitites = () => {
    const dispatch = useDispatch();

    const {
        strength,
        agility,
        fighting,
        awareness,
        stamina,
        dexterity,
        intellect,
        presence
    } = useSelector(selectAbilities3e);

    const handleAbilityChange = (e) => {
        dispatch(editAbility({ ability: e.target.id, amount: Number(e.target.value) }));
    };

    return (
        <div>
            <label htmlFor="strength">Strength</label>
            <input id="strength" type="number" min="-5" max="20" name="strength" onChange={handleAbilityChange} value={strength} />
            <label htmlFor="agility">Agility</label>
            <input id="agility" type="number" min="-5" max="20" onChange={handleAbilityChange} value={agility} />
            <label htmlFor="fighting">Fighting</label>
            <input id="fighting" type="number" min="-5" max="20" onChange={handleAbilityChange} value={fighting} />
            <label htmlFor="awareness">Awareness</label>
            <input id="awareness" type="number" min="-5" max="20" onChange={handleAbilityChange} value={awareness} />
            <label htmlFor="stamina">Stamina</label>
            <input id="stamina" type="number" min="-5" max="20" onChange={handleAbilityChange} value={stamina} />
            <label htmlFor="dexterity">Dexterity</label>
            <input id="dexterity" type="number" min="-5" max="20" onChange={handleAbilityChange} value={dexterity} />
            <label htmlFor="intellect">Intellect</label>
            <input id="intellect" type="number" min="-5" max="20" onChange={handleAbilityChange} value={intellect} />
            <label htmlFor="presence">Presence</label>
            <input id="presence" type="number" min="-5" max="20" onChange={handleAbilityChange} value={presence} />
        </div>
    );
}
