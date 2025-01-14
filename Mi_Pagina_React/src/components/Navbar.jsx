import React, { useState, useEffect} from 'react';
import { Link } from "react-scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="nav-link" href="#">Home</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="about-me" duration={500} className="nav-link" offset={-100}>
                About me 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" duration={500} className="nav-link" offset={-100}>
                Projects 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" duration={500} className="nav-link" offset={-100}>
                Contact 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
