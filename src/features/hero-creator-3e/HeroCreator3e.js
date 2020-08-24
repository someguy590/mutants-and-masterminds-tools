import React from 'react'

export const HeroCreator3e = () => {
    const skillsSectionHeader = (
        <div>
            <span>Skills</span>
            <span>Total</span>
            <span>Ability</span>
            <span>Ranks</span>
            <span>Other</span>
        </div>
    );
    const skillsSection = [skillsSectionHeader];
    const skills = ['Acrobatics', 'Athletics', 'Close Combat', 'Deception', 'Expertise', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Persuation', 'Ranged Combat', 'Sleight Of Hand', 'Stealth', 'Technology', 'Treatment', 'Vehicles'];
    const specifiedSkills = ['Close Combat', 'Expertise', 'Ranged Combat'];
    for (const skill of skills) {
        let skillRowContent = [];
        let skillRow = <div>{skillRowContent}</div>;
        if (specifiedSkills.includes(skill)) {
            skillRowContent.push(<span>{skill}</span>);
            skillsSection.push(skillRow);
            for (let i = 0; i < 3; i++) {
                skillRowContent = [];
                skillRow = <div>{skillRowContent}</div>;
                skillRowContent.push(<input type="input" />);
                skillRowContent.push(<span>{}</span>);
                skillRowContent.push(<span>{}</span>);
                skillRowContent.push(<input type="input" />);
                skillRowContent.push(<input type="input" />);
                skillsSection.push(skillRow);
            }
        }
        else {
            skillRowContent.push(<span>{skill}</span>);
            skillRowContent.push(<span>{}</span>);
            skillRowContent.push(<span>{}</span>);
            skillRowContent.push(<input type="input" />);
            skillRowContent.push(<input type="input" />);
            skillsSection.push(skillRow);
        }
    }

    return (
        <section>
            <h1>Hero Creator 3e</h1>
            <form>
                <div>
                    <label htmlFor="heroName">Hero:</label>
                    <input id="heroName" type="text"  />
                    <label htmlFor="playerName">Player:</label>
                    <input id="playerName" type="text"  />

                    <label htmlFor="identity">Identity:</label>
                    <input id="identity" type="text"  />
                    <input id="secret" type="radio"  />
                    <label htmlFor="secret">Secret</label>
                    <input id="public" type="radio"  />
                    <label htmlFor="public">Public</label>

                    <label htmlFor="gender">Gender:</label>
                    <input id="gender" type="text"  />
                    <label htmlFor="age">Age:</label>
                    <input id="age" type="text"  />
                    <label htmlFor="height">Height:</label>
                    <input id="height" type="text"  />
                    <label htmlFor="weight">Weight:</label>
                    <input id="weight" type="text"  />
                    <label htmlFor="eyes">Eyes:</label>
                    <input id="eyes" type="text" />
                    <label htmlFor="hair">Hair:</label>
                    <input id="hair" type="text" />
                    <label htmlFor="groupAffiliation">Group Affiliation:</label>
                    <input id="groupAffiliation" type="text" />
                    <label htmlFor="baseOfOperations">Base Of Operations:</label>
                    <input id="baseOfOperations" type="text" />

                    <label htmlFor="powerLevel">Power Level:</label>
                    <input type="number"  />

                    <span>Power Point Totals: Abilities {0} + Powers {} + Advantages {} + Skills {} + Defenses {} = {}</span>
                </div>

                <div>
                    <label htmlFor="strength">Strength</label>
                    <input id="strength" type="number" />
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

                <div>
                    Defense
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

                <div>
                    Offense
                    <label htmlFor="initiative">Initiative</label>
                    <input id="initiative" type="number" />
                    <div>
                        <input type="text" />
                        <input type="number" />
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                        <input type="number" />
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                        <input type="number" />
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                        <input type="number" />
                        <input type="text" />
                    </div>
                </div>

                <div>
                    <label htmlFor="notesConditions">Notes & Conditions</label>
                    <textarea id="notesConditions" ></textarea>
                </div>

                <div>
                    <label htmlFor="plotPoints">Plot Points</label>
                    <input type="number" />
                </div>

                <div>
                    <label htmlFor="abilityPointsEarned">Ability Points Earned</label>
                    <input id="abilityPointsEarned" type="number" />
                </div>

                <div>
                    <label htmlFor="abilityPointsSpent"></label>
                    <input id="abilityPointsSpent" type="number" />

                </div>

                <div>
                    <label htmlFor="powersDevices">Powers & Devices</label>
                    <textarea id="powersDevices"></textarea>
                </div>

                <div>
                    {skillsSection}
                </div>

                <div>
                    <label htmlFor="advantages">Advantages</label>
                    <textarea id="advantages"></textarea>
                </div>

                <div>
                    <label htmlFor="complications">Complications</label>
                    <textarea id="complications"></textarea>
                </div>

                <div>
                    <label htmlFor="equipmentVehiclesHeadquarters">Equipment, Vehicles, and Headquarters</label>
                    <textarea id="equipmentVehiclesHeadquarters"></textarea>
                </div>
                <div>
                    Information
                    <label htmlFor="series">Series:</label>
                    <input id="series" type="text" />
                    <label htmlFor="gameMaster">Game Master:</label>
                    <input id="gameMaster" type="text" />
                    <label htmlFor="notes">Notes:</label>
                    <textarea id="notes"></textarea>
                </div>
            </form>
        </section>
    );
}
