import React from 'react'
import { useSelector } from 'react-redux';
import { selectSkills3e } from './heroCreator3eSlice';

export const Skills = () => {

    const skills = useSelector(selectSkills3e);

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
    for (let i = 0, key = 1; i < skills.ids.length; i++) {
        const skill = skills[skills.ids[i]];
        let skillRowContent = [];
        let skillRow = <div key={key++}>{skillRowContent}</div>;
        if (skill.type === 'normal') {
            skillRowContent.push(<span key={0}>{skill.text}</span>);
            skillRowContent.push(<span key={1}>{skill.total}</span>);
            skillRowContent.push(<span key={2}>{skill.ability}</span>);
            skillRowContent.push(<input key={3} type="number" value={skill.ranks} />);
            skillRowContent.push(<input key={4} type="number" value={skill.other} />);
        }
        else if (skill.type === 'custom') {
            skillRowContent.push(<input key={0} type="text" value={skill.text} />);
            skillRowContent.push(<span key={1}>{skill.total}</span>);
            skillRowContent.push(<span key={2}>{skill.ability}</span>);
            skillRowContent.push(<input key={3} type="number" value={skill.ranks} />);
            skillRowContent.push(<input key={4} type="number" value={skill.other} />);
        }
        else {
            skillRowContent.push(<span key={0}>{skill.text}</span>);
        }
        skillsSection.push(skillRow);
    }

    return (
        <div className="skills">
            {skillsSection}
        </div>
    );
}
