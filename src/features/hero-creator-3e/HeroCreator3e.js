import React from 'react'
import { HeroDetails } from './HeroDetails';
import { Abilitites } from './Abilitites';

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
            <form className="hero-creator-3e">
                <HeroDetails />
                <Abilitites />

                <div className="offense">
                    <span>Offense</span>
                    <div>
                        <label htmlFor="initiative">Initiative</label>
                        <input id="initiative" type="number" />
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
                    <div>
                        <input type="text" />
                        <input type="number" />
                        <input type="text" />
                    </div>
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
                    <label htmlFor="abilityPointsSpent">Ability Points Spent</label>
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
                    <span>Information</span>
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
