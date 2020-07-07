import React from 'react'

const SkillSet = ({ exp, skill, language }) => {
    return (
        <div className="list-card">
            <span className="exp">{exp}</span>
            <div>
                <h3>{skill}</h3>
                <span>{language}</span>
            </div>
        </div>
    )
}
export default SkillSet