import React, { useState } from 'react'
import Detail from './modal'

const Card = ({ superscript, exp, skillTitle, descrip, classn }) => {

    const [show, setShow] = useState(false)
    const toggle = () => setShow(!show)
    return (
        < div className="card" onClick={toggle}>
            <div className="skill-level">
                <h2>{exp}</h2>
                <span>{superscript}</span>
            </div>

            <div className="skill-meta">
                <h3>{skillTitle}</h3>
                <span>{descrip}</span>
            </div>
            {classn === "projects" ?
                (
                    <div>
                        <h1 className="offset-md-8 mt-3">More...</h1>
                        <Detail show={show} toggle={toggle} />
                    </div>
                )
                : (<div></div>)
            }
        </div >
    )
}

export default Card