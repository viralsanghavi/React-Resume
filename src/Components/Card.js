import React from 'react'

const Card = ({ superscript,exp, skillTitle, descrip }) => (
    <div class="card">
        <div class="skill-level">
            <span>{superscript}</span>
            <h2>{exp}</h2>
        </div>

        <div class="skill-meta">
            <h3>{skillTitle}</h3>
            <span>{descrip}</span>
        </div>
    </div>
)

export default Card