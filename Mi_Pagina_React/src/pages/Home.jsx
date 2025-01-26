import React, {useState, useEffect} from 'react';
import {Element} from "react-scroll";

// Carrusel Style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

    /* FOR WALLPAER 1
    useEffect(() => {
      const light = document.querySelector('.light');
      const grid = document.querySelector('.grid');

      const skewAngle = 25;
      const rotateAngle = -28;

      grid.addEventListener("mousemove", (e) => {
        light.style.left = `${e.clientX}px`;
        light.style.top = `${e.clientY}px`;  
      });
    },[]
    );
    */

    useEffect(() => { // NAME
      const text = document.getElementById('d3-text');
      if(text) {
        let shadow = "";
        var shadowColor = "rgba(0, 0, 0, 0.5)";
        for (let i = 0; i < 13; i++) {
            shadow += (shadow? "," : "") + (-i*1)+"px "+i*1+"px 0 rgb(43, 43, 43)";
            //shadow += `${-i * 2}px ${i * 2}px ${i}px ${shadowColor}`;
            //if (i < 30) shadow += ", ";
        }
        text.style.textShadow = shadow;
      }
    },[]);

    useEffect(() => { // PROFESSION
      const text = document.getElementById('d3-text-2');
      if(text) {
        let shadow = "";
        var shadowColor = "rgba(0, 0, 0, 0.5)";
        for (let i = 0; i < 5; i++) {
            shadow += (shadow? "," : "") + (-i*1)+"px "+i*1+"px 0 rgb(43, 43, 43)"; //before: 217 217 217
            //shadow += `${-i * 2}px ${i * 2}px ${i}px ${shadowColor}`;
            //if (i < 30) shadow += ", ";
        }
        text.style.textShadow = shadow;
      }
    },[]);

    useEffect(() => {  // FOR WALLPAER 2
      const light1 = document.querySelector('.light1');
      const grid1 = document.querySelector('.grid1');

      if(window.innerWidth > 768) {
        const handleMouseMove = (e) => {
          light1.style.left = `${e.clientX}px`;
          light1.style.top = `${e.clientY}px`;  
        };
     
        document.addEventListener("mousemove", handleMouseMove); /* En vez de document se deberia usar grid1 */
     
        return () => document.removeEventListener("mousemove", handleMouseMove);
      }
      else {
        console.log("grid1 no se encontro xd");
      }
   
      
   }, []);
   

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
        <div>
             <Element id="home">
              <Header1 />
             </Element>
             {arrowIsVisible && (
                <div className={`scroll-arrow ${!arrowIsVisible ? "hidden" : ""}`} onClick={scrollToSection}>
                     <img src={whiteArrow} alt="white-arrow" className="arrow-image" />
                </div>)}
             <div className="content">
              <Element id="about-me">
                <AboutMe />
              </Element>
              <Element id="projects">
                <Projects />        
              </Element>
              <Element id="contact">
                <Contact /> 
              </Element>
             </div>
        </div>
    );
}

function Header(){ //Componente con nombre y profesion, opción 1
  return (
    <div className="header-main">
      <div className="home-container">
        <div className="hex-container">
          <header id="hex-grid">
            <div className="light"></div>
            <div className="grid"></div>
          </header>
          <div className="d3-text-container">
            <div id="d3-text" className="d3-text" data-text="SEBASTIAN JORDAN">
              SEBASTIAN
              <br /> 
              JORDAN
            </div>
            <p id="d3-text-2"> Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header1(){ //Componente con nombre y profesion, opción 2
  return (
    <div className="header-main1">
      <div className="home-container1">
        <div className="hex-container1">
          <header id="hex-grid1">
            <div className="light1"></div>
            <div className="grid1"></div>
          </header>
          <div className="d3-text-container1">
            <div id="d3-text1" className="d3-text1" data-text="SEBASTIAN JORDAN 1">
              SEBASTIAN
              <br /> 
              JORDAN
            </div>
            <p id="d3-text-21"> Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Name() { // Componente que muestra el nombre y la profesión (simple)
    return (
        <div className="name-container">
             <h1>SEBASTIAN JORDAN</h1>
             <p>Frontend Developer</p>
        </div>
    );
}

function AboutMe() {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const techItems = [
    { icon: reactIcon, name: "React" },
    { icon: angularIcon, name: "Angular" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: htmlIcon, name: "HTML" },
    { icon: cssIcon, name: "CSS" },
    { icon: cSharpIcon, name: "C#" },
    { icon: cPlusPlusIcon, name: "C++" },
    { icon: netIcon, name: ".NET" },
    { icon: wordpressIcon, name: "Wordpress" },
    { icon: javaIcon, name: "JAVA" },
    { icon: sqlIcon, name: "SQL" },
    { icon: gitIcon, name: "Git" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
          
          {isMobile ? (
            <Slider {...sliderSettings}>
              {techItems.map((item, index) => (
                <div key={index} className="tech-item">
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </Slider>) 
            :
            (
            <div className="tech-stack-grid">
              {techItems.map((item, index) => (
                <div key={index} className="tech-item">
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            )
          }
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
          repoLink: "https://github.com/seba17Jordan/Building-Management-CRUD-app",
        },
        {
          name: "Facundo Website",
          description: " I developed a responsive and visually appealing web page for a content creator, specifically designed to attract clients for coaching sessions, acting as a landing page. I handled both the development and design. The project emphasized continuous collaboration, with regular deliveries and constant feedback. Currently, the website is under maintenance, but references can be provided upon request.",
          image: projectFacu,
          techIcons: [wordpressIcon, diviIcon, cssIcon],
          liveLink: "https://facubardanca.com/",
        },
        {
            name: "Pizzeria Website",
            description: "This project is ideal for pizzerias, showcasing the menu, contact information, and location. The website was designed to be visually appealing and user-friendly, with a focus on attracting customers. The technology stack included HTML, CSS, and JavaScript, with a mobile-first approach to ensure responsiveness.",
            image: projectPizzeria,
            techIcons: [jsIcon, htmlIcon, cssIcon],
            repoLink: "https://github.com/sebaJordanYT/App-Restaurante-Ejemplo",
            /*liveLink: "https://project2.com",*/
        },
        {
            name: "Tic-Tac-Toe Game",
            description: "The classic game of Tic-Tac-Toe, developed using React. The game includes features such as tracking player turns, displaying the winner, and resetting the board. The users can also restart the scores at any time. The project showcases my knowledge about React components, state management, and event handling. This game was developed with the help of a tutorial, credits to the author 'midudev'.",
            image: projectGame,
            techIcons: [reactIcon, cssIcon],
            repoLink: "https://github.com/seba17Jordan/TIC-TAC-TOE",
            /*liveLink: "https://project2.com",*/
        },
    ];
      
    return (
      <div>
        <h2 id="projects-title">Projects</h2>
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
        <div className="project-content">
          <img src={image} alt={`${name} preview`} />
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="project-footer">
          <div className="project-links">
            {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer"> <span> GitHub Repo </span> </a>}
            {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer"> <span> Live Site </span></a>}
          </div>  
          <div className="tech-icons">
            {techIcons.map((icon, index) => (
              <img key={index} src={icon} alt="Tech icon" />
            ))}
          </div>
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

function ThisPage(){
    return (
      <div className="this-page-info">
        <div className="this-page-card glass-effect">
          <div className="this-page-card-content">
            <h1>This page...</h1>
            <p>
              This page was entirely developed using React (with Vite as the bundler).
              The application structure is built using good practices such as reusable components, ensuring scalability and maintainability.
              Transitions and visual effects are achieved using CSS and JS.
              The design follows a minimalist approach, with a fully responsive interfaces.
            </p>
            <a href="https://es.react.dev/">
              <img src={reactIcon} alt="React"/>
            </a>
          </div>
        </div>
      </div>
    );
}



