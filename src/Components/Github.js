import React, { useEffect, useState } from 'react'
import { Card, CardText, CardImg } from 'reactstrap'
import { Link } from 'react-router-dom'

export const Github = () => {
    const [project, setProject] = useState([])
    const [loaded, isLoaded] = useState(false)
    const [avatar, setAvatar] = useState('')
    useEffect(() => {
        fetch("https://api.github.com/users/viralsanghavi/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    setProject(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            )
    }, [])
    useEffect(() => {
        fetch("https://api.github.com/users/viralsanghavi")
            .then(res => res.json())
            .then(
                (result) => {
                    setAvatar(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            )
    }, [])
    return (
        < div className="github" >
            <nav className="p-4 github__nav">
               <Link to="/"><h2>Viral Sanghavi</h2></Link>
                <a href={avatar.html_url}
                    target="__blank">
                    <img src={avatar.avatar_url} alt="logo" />
                </a>
            </nav>

            <div className="github__container">

                {
                    project.map(show => <Card key={show.node_id} className="github__card">
                        <CardImg src={require("../assets/Github_logo.jpg")} />
                        <a href={show.html_url} target="__blank" >
                            <CardText>
                                {show.name}
                            </CardText>
                        </a>

                    </Card>)
                }
            </div>
        </div>
    )
}
