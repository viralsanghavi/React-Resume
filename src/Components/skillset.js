import React from 'react'

const SkillSet = ({ exp, skill, language }) => {
    return (
        <div class="list-card">
            <span class="exp">{exp}</span>
            <div>
                <h3>{skill}</h3>
                <span>{language}</span>
            </div>
        </div>
    )
}
export default SkillSet