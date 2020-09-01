import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectDefenses3e, editDefenseCost, selectDefenseCost3e } from './heroCreator3eSlice';

export const Defense = () => {
    const dispatch = useDispatch();

    const {
        dodge,
        parry,
        fortitude,
        toughness,
        will
    } = useSelector(selectDefenses3e);

    const {
        dodgeCost,
        parryCost,
        fortitudeCost,
        willCost
    } = useSelector(selectDefenseCost3e);

    const handleDefenseChange = e => dispatch(editDefenseCost({defense: e.target.id, newAmount: Number(e.target.value)}));

    return (
        <div>
            <span>Defense</span>
            <label htmlFor="dodge">Dodge (AGL) ({dodgeCost})</label>
            <input id="dodge" type="number" onChange={handleDefenseChange} value={dodge} />
            <label htmlFor="parry">Parry (FGT) ({parryCost})</label>
            <input id="parry" type="number" onChange={handleDefenseChange} value={parry} />
            <label htmlFor="fortitude">Fortitude (STA) ({fortitudeCost})</label>
            <input id="fortitude" type="number" onChange={handleDefenseChange} value={fortitude} />
            <label htmlFor="toughness">Toughness (STA)</label>
            <span>{toughness}</span>
            <label htmlFor="will">Will (AWE) ({willCost})</label>
            <input id="will" type="number" onChange={handleDefenseChange} value={will} />
        </div>
    );
}
