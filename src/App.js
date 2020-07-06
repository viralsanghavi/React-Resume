import React from 'react'
import './App.css'
import ListItem from './Components/listitem'
import Card from './Components/Card'
import SkillSet from './Components/skillset'
import {FaLinkedinIn} from 'react-icons/fa'

const App = () => {
  return (
    <div>
{/* Side Icons */}
      <div className="icons">

        <ul>
          <a href="https://www.youtube.com/channel/UCwDxrXhDmDHehSDbo76RWCg" rel="noopener noreferrer" target="_blank"><li className="twitter"><FaLinkedinIn />
          </li></a>
        </ul>
      </div>

      <div class="container">
        <div class="hero">
          <h1 class="name"><strong>Viral</strong> Sanghavi</h1>
          <span class="job-title">Developer</span>
          <span class="email">vsanghavi3@gmail.com</span>

          <h2 class="lead">Development and design of applications. </h2>
        </div>
      </div>

      <div class="container">

        <div class="sections">
          <h2 class="section-title">Skills</h2>
          <SkillSet exp="+ 1 years" skill="Object programming" language="Python, Core Java" />
          <SkillSet exp="+ 1 years" skill="Design Integration" language="JS Frameworks and libraries like React. Flask framework" />
          <SkillSet exp="+ 0 years" skill="Linux" language="Scripting, Automation" />


        </div>
        <div class="sections">
          <h2 class="section-title">Interests</h2>
          <SkillSet exp="+ 1 years" skill="Scripting languages" language="Python, JS" />
          <SkillSet exp="+ 1 years" skill="Machine Learning" language="Sckit-learn, Tensorflow, Algorithms, Graph Database" />

        </div>
      </div>


      <div class="container cards">
        <Card exp="5" superscript="+" skillTitle="Projects" descrip="Adapting and creating solutions for customer's needs" />
        <Card exp="50" superscript="%" skillTitle="Web" descrip="Applications development integrating third-party services, MySQL,Neo4j Database, and api(s)." />
        <Card exp="30" superscript="%" skillTitle="Technical Solutions" descrip="Such as web dev, API usage and integration." />
        <Card exp="20" superscript="" skillTitle="Leading" descrip="Projects and ensure the quality of delivery, with knowledge sharing with team." />
      </div>


      <div class="container">
        <ol class="timeline">
          <ListItem exp="Experiences" loc="Associate System Analyst @NSE IT Limited" date="Sep. 2019 - Present" />
          <ListItem exp="Education" loc="University of Mumbai  Electronics and Telecommunications" date="2015 - 2019" />
          <ListItem exp="Experiences" loc="Higher Education in Science" date=" 2013 - 2015" />
        </ol>
      </div>
    </div >

  )
}

export default App