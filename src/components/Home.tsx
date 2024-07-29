import React from 'react';
import profileImage from '../assets/images/profile.png';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <img src={profileImage} alt="James Muriuki" className="profile-image" />
      <div className="home-text">
        <h2>James Muriuki</h2>
        <p>
          Experienced Software developer with a demonstrated history of working in the information technology and services industry. Skilled in Ruby, Javascript, and Version Control. I build products that conform to the industry standards.
        </p>
      </div>
    </section>
  );
};

export default Home;
