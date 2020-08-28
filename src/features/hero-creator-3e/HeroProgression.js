import React from 'react'

export const HeroProgression = () => {
    return (
        <div>
            <div>
                <label htmlFor="plotPoints">Plot Points</label>
                <input id="plotPoints" type="number" min="0"/>
            </div>

            <div>
                <label htmlFor="abilityPointsEarned">Ability Points Earned</label>
                <input id="abilityPointsEarned" type="number" />
            </div>

            <div>
                <label htmlFor="abilityPointsSpent">Ability Points Spent</label>
                <input id="abilityPointsSpent" type="number" />
            </div>
        </div>
    );
}
