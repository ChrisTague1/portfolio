import React from 'react';
import './About.css';

const About = ({ profile }) => {
  return (
    <section id="about" >
      <div id="about_package">
        <h2 className="title">About me</h2>
        <div className="about_container">
          <img className="box profile" src={profile} />
          <div className="box text">
            <p>
              I grew up in McCausland, a small town in rural Iowa, and went to North Scott High School in Eldridge.
              While in high school, I was a varsity track and cross country runner, head of the drumline, lead drummer
              in for the jazz band, and a member of the theater program.
            </p>
            <p>
              In senior year of high school I took my first programming class and fell in love. I started learning more on my own, 
              and decided I wanted to major in software engineering. In addition to university courses, I have take online courses over topics 
              like full stack development, React JS, SQL, docker, and Jenkins. Going forward, I wish to keep learning everything I can about 
              software developemnt, and grow both as a person and engineer along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;