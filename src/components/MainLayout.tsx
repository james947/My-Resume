import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';

const MainLayout: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#experience">Experience</Link></li>
            <li><Link to="#projects">Projects</Link></li>
            <li><Link to="#blog">Blog</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2024 Built with React(Ts!)</p>
      </footer>
    </>
  );
};

export default MainLayout;
