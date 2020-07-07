import React from 'react'

const ListItem = ({ exp, loc, date }) => (
    <li>
        <p className="line">{exp}</p>
        <span className="point"></span>
        <p className="description">
            {loc}
        </p>
        <span className="date">{date}</span>
    </li>
)

export default ListItem