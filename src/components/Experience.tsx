import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Experience: React.FC = () => {
  const toggleDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    const details = e.currentTarget.nextElementSibling as HTMLElement;
    const isVisible = details.style.display === 'block';
    details.style.display = isVisible ? 'none' : 'block';
    e.currentTarget.textContent = isVisible ? 'Show More' : 'Show Less';
  };

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/james-muriuki-716566166/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="timeline">
      <div className="timeline-item">
          <h3>Software Engineer | Novel Paints</h3>
          <p>May 2024 - Present</p>
          <p className="summary">Developed robust systems for payroll automation and cross-company transactions, leveraging cloud infrastructure for scalability and reliability.</p>
          <button className="expand-btn" onClick={toggleDetails}>Show More</button>
          <ul className="details">
            <li>Payroll Automation System (Ruby on Rails, JavaScript, MySQL): Automated employee payroll calculations, time-off tracking, and bonus management, reducing administrative overhead and improving payroll accuracy.</li>
            <li>Cross-Company Transaction Platform (Ruby on Rails, JavaScript): Built a centralized platform for managing transactions and expenses across multiple business units, providing valuable insights into company-wide financials.</li>
            <li>Cloud Infrastructure (AWS, Docker): Deployed and maintained applications on AWS (EC2, RDS) using Docker for scalability and reliability.</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Software Engineer at Crossover Health</h3>
          <p>Apr 2020 - Apr 2024</p>
          <p className="summary">Collaborated across teams to resolve issues and led the architectural design and technical specifications for new features.</p>
          <button className="expand-btn" onClick={toggleDetails}>Show More</button>
          <ul className="details">
            <li>Issue Resolution: Collaborated across teams to swiftly identify and resolve critical issues in development and live environments, ensuring uninterrupted service.</li>
            <li>Architectural Design: Spearheaded architectural design and authored technical specifications for cutting-edge features, ensuring project scalability and alignment with objectives.</li>
            <li>Code Quality: Led code reviews, eliminated performance bottlenecks, and enforced code quality standards, maintaining a robust and efficient codebase.</li>
            <li>Payment Integration: Integrated the Stripe API, enabling secure patient payments and resulting in a $5,000 increase in monthly revenue.</li>
            <li>Onboarding Support: Provided hands-on technical support to onboard 50+ doctors, ensuring seamless transition and optimal service utilization.</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Software Engineer at Kwara</h3>
          <p>Nov 2021 - Jun 2022</p>
          <p className="summary">Developed microservices and integrated with Lami and Co-op Bank, enhancing system performance and customer support.</p>
          <button className="expand-btn" onClick={toggleDetails}>Show More</button>
          <ul className="details">
            <li>Microservice Development: Specialized in Ruby on Rails, MySQL, RabbitMQ, Sidekiq, and Redis for the integrations team, enhancing system performance and data exchange, resulting in a 25% increase in efficiency.</li>
            <li>Integration Projects: Assisted in successful integrations with Lami and Co-op Bank, increasing platform usage by 30%.</li>
            <li>Customer Support: Provided bi-weekly customer support, resolving 95% of inquiries on the first contact, contributing to high customer satisfaction.</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Software Engineer at Chargeback</h3>
          <p>Feb 2019 - Sep 2019</p>
          <p className="summary">Optimized database performance, developed dashboards, and created reusable components for a cohesive user interface.</p>
          <button className="expand-btn" onClick={toggleDetails}>Show More</button>
          <ul className="details">
            <li>Database Optimization: Enhanced application performance by optimizing database queries, resulting in a 15% reduction in response times.</li>
            <li>Dashboard Development: Designed and implemented a dashboard for merchants to track and manage disputed charges, improving dispute resolution efficiency by 25%.</li>
            <li>Reusable Components: Created highly reusable and modular components from design mockups, promoting code efficiency and maintainability.</li>
            <li>Full Stack Development: Utilized Ruby on Rails, Vue.js, Saas, jQuery, and Ajax for cohesive front-end and back-end development.</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Software Engineer at Andela</h3>
          <p>Apr 2018 - Nov 2020</p>
          <p className="summary">Full Stack developer for VOF, an internal product built on Ruby on Rails and CoffeeScript. Managed a team of six developers.</p>
          <button className="expand-btn" onClick={toggleDetails}>Show More</button>
          <ul className="details">
            <li>Full Stack Development: Contributed to VOF development, an internal hiring product using Ruby on Rails and CoffeeScript, improving hiring processes by 30%.</li>
            <li>Product Management: Managed a team of six developers, delivering projects 20% ahead of schedule and under budget.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
