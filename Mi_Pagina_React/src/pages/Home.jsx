import React, {useState, useEffect} from 'react';
import {Element} from "react-scroll";

// Images & Icons (folder)
import whiteArrow from '../images/white-arrow.png';
import projectFacu from '../images/project-facu.png';
import projectBuilding from '../images/project-building.png';
import projectPizzeria from '../images/project-pizzeria.png';
import projectGame from '../images/project-game.png';
import cssIcon from '../images/CSS-Icon.svg';
import jsIcon from '../images/JS-Icon.svg';
import htmlIcon from '../images/HTML5-Icon.svg';
import angularIcon from '../images/Angular-Icon.svg';
import reactIcon from '../images/React-Icon.svg';
import cSharpIcon from '../images/CSharp-Icon.svg';
import netIcon from '../images/NET-Icon.svg';
import wordpressIcon from '../images/WordPress-Icon.svg';
import diviIcon from '../images/Divi-Icon.svg';
import javaIcon from '../images/JAVA-Icon.svg';
import sqlIcon from '../images/SQL-Icon.svg';
import cPlusPlusIcon from '../images/C++-Icon.svg';
import profilePic from '../images/profile-picture.jpg';
import gitIcon from '../images/Git-Icon.svg';

// Icons (Font Aweseme library)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
    const [arrowIsVisible, setArrowIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setArrowIsVisible(window.scrollY < 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    const scrollToSection = () => {
        const aboutMeSection = document.getElementById('about-me');
        if (aboutMeSection) {
            aboutMeSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <dev>
             <Element id="name">
                 <Name />
             </Element>
             {arrowIsVisible && (
                <div className={`scroll-arrow ${!arrowIsVisible ? "hidden" : ""}`} onClick={scrollToSection}>
                     <img src={whiteArrow} alt="white-arrow" className="arrow-image" />
                </div>)}
             <Element id="about-me">
                 <AboutMe />
             </Element>
             <Element id="projects">
                 <Projects />        
             </Element>
             <Element id="contact">
                 <Contact /> 
             </Element>
        </dev>
    );
}

//Name, about me, projects, skills, contacto, education puede ir en una de las secciones anteriores
function Name() {
    return (
        <div className="name-container">
             <h1>SEBASTIAN JORDAN</h1>
             <p>Frontend Developer</p>
        </div>
    );
}

function AboutMe() {
    return (
      <div className="about-me-container">
        <h2>A little about me</h2>
        <p>
          Hey, I'm Sebastian, a frontend developer based in Montevideo, Uruguay. I am passionate about creating beautiful and functional interfaces.
          I have experience working with different technologies such as React, JavaScript, HTML, CSS, among others.
        </p>
  
        <div className="about-me-content">

          <div className="about-me-education">
            <h3>Education</h3>
            <ul>
              <li>
                Software Engineer 
                <span className="education-details"> ORT University </span>
                <span className="education-details"> (2020 - Present) </span>
              </li>
              <li>
                Assistant Engineer Certification
                <span className="education-details"> ORT University </span>
                <span className="education-details"> (2020 - 2023) </span>
              </li>
            </ul>
          </div>
  
          <div className="about-me-tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-stack-grid">
              <div className="tech-item">
                <img src={reactIcon} alt="React" />
                <p>React</p>
              </div>
              <div className="tech-item">
                <img src={angularIcon} alt="Angular" />
                <p>Angular</p>
              </div>
              <div className="tech-item">
                <img src={jsIcon} alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="tech-item">
                <img src={htmlIcon} alt="html" />
                <p>HTML</p>
              </div>
              <div className="tech-item">
                <img src={cssIcon} alt="css" />
                <p>CSS</p>
              </div>
              <div className="tech-item">
                <img src={cSharpIcon} alt="c#" />
                <p>C#</p>
              </div>
              <div className="tech-item">
                <img src={cPlusPlusIcon} alt="C++" />
                <p>C++</p>
              </div>
              <div className="tech-item">
                <img src={netIcon} alt=".net" />
                <p>.NET</p>
              </div>
              <div className="tech-item">
                <img src={wordpressIcon} alt="wordpress" />
                <p>Wordpress</p>
              </div>
              <div className="tech-item">
                <img src={javaIcon} alt="JAVA" />
                <p>JAVA</p>
              </div>
              <div className="tech-item">
                <img src={sqlIcon} alt="SQL" />
                <p>SQL</p>
              </div>
              <div className="tech-item">
                <img src={gitIcon} alt="git" />
                <p>Git</p>
              </div>
              <div className="tech-item">
                <FontAwesomeIcon icon={faGithub} size="3x" color="dd0031" />
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
  

  
function Projects() {

    const projects = [
        {
          name: "Building Management",
          description: "This university project, which received high marks, is a platform designed for construction companies to manage buildings and people effectively. It includes role-based access for administrators, supports CRUD operations, data imports, and handles HTTP requests and endpoints. The app showcases best practices in clean code, design patterns, and RESTful API architecture.",
          image: projectBuilding,
          techIcons: [angularIcon,cSharpIcon,cssIcon,netIcon],
          repoLink: "https://github.com/username/project1",
          liveLink: "https://project1.com",
        },
        {
          name: "Facundo Website",
          description: " I developed a responsive and visually appealing web page for a content creator, specifically designed to attract clients for coaching sessions, acting as a landing page. I handled both the development and design. The project emphasized continuous collaboration, with regular deliveries and constant feedback. Currently, the website is under maintenance, but references can be provided upon request.",
          image: projectFacu,
          techIcons: [wordpressIcon, diviIcon, cssIcon],
          repoLink: "https://github.com/username/project2",
          liveLink: "https://project2.com",
        },
        {
            name: "Pizzeria Website",
            description: "This project is ideal for pizzerias, showcasing the menu, contact information, and location. The website was designed to be visually appealing and user-friendly, with a focus on attracting customers. The technology stack included HTML, CSS, and JavaScript, with a mobile-first approach to ensure responsiveness.",
            image: projectPizzeria,
            techIcons: [jsIcon, htmlIcon, cssIcon],
            repoLink: "https://github.com/username/project2",
            liveLink: "https://project2.com",
        },
        {
            name: "Tic-Tac-Toe Game",
            description: "The classic game of Tic-Tac-Toe, developed using React. The game includes features such as tracking player turns, displaying the winner, and resetting the board. The users can also restart the scores at any time. The project showcases my knowledge about React components, state management, and event handling. This game was developed with the help of a tutorial, credits to the author 'midudev'.",
            image: projectGame,
            techIcons: [reactIcon, cssIcon],
            repoLink: "https://github.com/username/project2",
            liveLink: "https://project2.com",
        },
    ];
      
    return (
      <div>
        <h2>Projects</h2>
        <div className="projects-container">
            {projects.map((project, index) => (
            <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                image={project.image}
                techIcons={project.techIcons}
                repoLink={project.repoLink}
                liveLink={project.liveLink}
            />
            ))}
        </div>
      </div>  
      
    );
}

function ProjectCard({ name, description, image, techIcons, repoLink, liveLink }) {
    return (
      <div className="project-card">
        <img src={image} alt={`${name} preview`} />
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="tech-icons">
          {techIcons.map((icon, index) => (
            <img key={index} src={icon} alt="Tech icon" />
          ))}
        </div>
        <div className="project-links">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>}
        </div>
      </div>
    );
}

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <img src={profilePic} alt="profile-pic" className="profile-pic" />
                <button className="availability-button">
                  <a href="https://www.linkedin.com/in/sebastian-jordan-1251a625a/" target="_blank">
                    Available to work
                  </a>
                </button>
            </div>
            <h2>Contact Me</h2>
            <p>
                I'm prepared to face new challenges and create impactful solutions. 
                Feel free to reach out if you have any opportunities or simply want to connect!
            </p>
            <div className="contact-buttons">
                <button className="contact-button" target="_blank" rel="noopener noreferrer">
                  <a href="mailto:sebastianjordanyt@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="button-icon"/>
                    Contact me
                  </a>
                </button>
                <button className="linkedin-button">
                    <a href="https://www.linkedin.com/in/sebastian-jordan-1251a625a/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="button-icon"/>
                        LinkedIn
                    </a>
                </button>
            </div>
        </div>
    );
}



