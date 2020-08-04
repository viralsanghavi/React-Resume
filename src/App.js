import React from 'react'
import ListItem from './Components/listitem'
import Card from './Components/Card'
import SkillSet from './Components/skillset'
import { FaLinkedinIn } from 'react-icons/fa'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Link } from 'react-router-dom'
// import { useStateValue } from './StateProvider'

const App = () => {
  // const [theme, setTheme] = useState('light')
  // const [{ color }] = useStateValue()
  // console.log(color)
  return (
    <div
    //  style={{
    //   color:color.dark.color,
    //   background: color.dark.backgroundColor
    // }}
    >
      <nav className="navbar float-right">
        <Link to="/projects">
          <Button color="primary" outline right className="navbar__GoTo">Projects</Button>
        </Link>
      </nav>
      {/* Side Icons */}
      <div className="icons">
        <ul>
          <a href="https://www.linkedin.com/in/viral-sanghavi-b82033130" rel="noopener noreferrer" target="_blank"><li className="twitter"><FaLinkedinIn />
          </li></a>
        </ul>
      </div>

      <div className="container">
        <div className="hero">
          <h1 className="name"><strong>Viral</strong> Sanghavi</h1>
          <span className="job-title">Developer</span>
          <span className="email">vsanghavi3@gmail.com</span>

          <h2 className="lead">Development and design of applications. </h2>
        </div>
      </div>

      <div className="container">

        <div className="sections">
          <h2 className="section-title">Skills</h2>
          <SkillSet exp="+ 1 years" skill="Object programming" language="Python, Core Java" />
          <SkillSet exp="+ 1 years" skill="Design Integration" language="JS Frameworks and libraries like React. Flask framework" />
          <SkillSet exp="+ 0 years" skill="Linux" language="Scripting, Automation" />

          {/* TODO: */}




        </div>
        <div className="sections">
          <h2 className="section-title">Interests</h2>
          <SkillSet exp="+ 1 years" skill="Scripting languages" language="Python, JS" />
          <SkillSet exp="+ 1 years" skill="Machine Learning" language="Sckit-learn, Tensorflow, Algorithms, Graph Database" />

        </div>
      </div>


      <div className="container cards">
        <Card exp="7" superscript=" +" classn="projects" skillTitle="Projects" descrip="Adapting and creating solutions for customer's needs" />
        <Card exp="50" superscript=" %" skillTitle="Web" descrip="Applications development integrating third-party services, MySQL,Neo4j Database, and api(s)." />
        <Card exp="30" superscript=" %" skillTitle="Technical Solutions" descrip="Such as web dev, API usage and integration." />
        <Card exp="20" superscript=" %" skillTitle="Leading" descrip="Projects and ensure the quality of delivery, with knowledge sharing with team." />
      </div>


      <div className="container">
        <ol className="timeline">
          <ListItem exp="Experiences" loc="Associate System Analyst @NSE IT Limited" date="Sep. 2019 - Present" />
          <ListItem exp="Education" loc="University of Mumbai  Electronics and Telecomm" date="2015 - 2019" />
          <ListItem exp="Experiences" loc="Higher Education in Science" date=" 2013 - 2015" />
        </ol>
      </div>
    </div >

  )
}

export default App
