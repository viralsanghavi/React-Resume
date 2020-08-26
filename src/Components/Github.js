import React, { useEffect, useState } from 'react'
import { Card, CardText, CardImg, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'

export const Github = () => {
    const [project, setProject] = useState([])
    const [loaded, setLoaded] = useState(null)
    useEffect(() => {
        fetch("https://api.github.com/users/viralsanghavi/repos?sort=stars")
            .then(res => res.json())
            .then(
                (result) => {
                    setProject(result)
                    setLoaded(!loaded)
                }
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            )
            .catch(err => alert("Could Not load Data"))
    }, [])


    return (
        < div className="github" >

            {!loaded ? (<div>
                < Spinner type="grow" className="text-center" />
                <h1 className="text-center">Loading...</h1>
            </div >) :
                <>
                    <nav className="p-4 github__nav">
                        <Link to="/"><h2>Viral Sanghavi</h2></Link>
                        <a href={project.html_url}
                            target="__blank">
                            <img src={project[0].owner.avatar_url} alt="logo" />
                        </a>
                    </nav>

                    <div className="github__container">

                        {
                            project.map(show => <Card key={show.node_id} className="github__card">
                                {console.log(show)}
                                <a href={show.html_url} target="__blank" >
                                    <CardImg src={require("../assets/Github_logo.jpg")} />
                                    <CardText>
                                        {show.name}
                                    </CardText>
                                    <CardText className="decription">
                                        {show.description}
                                    </CardText>
                                </a>

                            </Card>)
                        }
                    </div>
                </>
            }
        </div>
    )
}
