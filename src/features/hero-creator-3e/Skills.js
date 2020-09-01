import React from 'react'

export const Skills = () => {
    const skillsSectionHeader = (
        <div key={0}>
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
    for (let i = 0, key = 1; i < skills.length; i++) {
        const skill = skills[i];
        let skillRowContent = [];
        let skillRow = <div key={key++}>{skillRowContent}</div>;
        if (specifiedSkills.includes(skill)) {
            skillRowContent.push(<span key={key++}>{skill}</span>);
            skillsSection.push(skillRow);
            for (let i = 0; i < 3; i++) {
                skillRowContent = [];
                skillRow = <div key={key++}>{skillRowContent}</div>;
                skillRowContent.push(<input key={0} type="text" />);
                skillRowContent.push(<span key={1}>{}</span>);
                skillRowContent.push(<span key={2}>{}</span>);
                skillRowContent.push(<input key={3} type="number" />);
                skillRowContent.push(<input key={4} type="number" />);
                skillsSection.push(skillRow);
            }
        }
        else {
            skillRowContent.push(<span key={0}>{skill}</span>);
            skillRowContent.push(<span key={1}>{}</span>);
            skillRowContent.push(<span key={2}>{}</span>);
            skillRowContent.push(<input key={3} type="number" />);
            skillRowContent.push(<input key={4} type="number" />);
            skillsSection.push(skillRow);
        }
    }

    return (
        <div>
            {skillsSection}
        </div>
    );
}
