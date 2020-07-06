import React from 'react'

const ListItem = ({ exp, loc, date }) => (
    <li>
        <p class="line">{exp}</p>
        <span class="point"></span>
        <p class="description">
            {loc}
        </p>
        <span class="date">{date}</span>
    </li>
)

export default ListItem