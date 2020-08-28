import React from 'react'

export const Defense = () => {
    return (
        <div>
            <span>Defense</span>
            <label htmlFor="dodge">Dodge (AGL)</label>
            <input id="dodge" type="number" />
            <label htmlFor="parry">Parry (FGT)</label>
            <input id="parry" type="number" />
            <label htmlFor="fortitude">Fortitude (STA)</label>
            <input id="fortitude" type="number" />
            <label htmlFor="toughness">Toughness (STA)</label>
            <input id="toughness" type="number" />
            <label htmlFor="will">Will (AWE)</label>
            <input id="will" type="number" />
        </div>
    );
}
