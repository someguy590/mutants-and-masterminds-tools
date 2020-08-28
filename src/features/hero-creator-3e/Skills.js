import React from 'react'

export const Skills = () => {
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
        <div>
            {skillsSection}
        </div>
    );
}
