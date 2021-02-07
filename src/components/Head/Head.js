import React from 'react';
import './Head.css';

const Head = () => {
  return (
    <header id="head">
      <div className="content">
        <h1 className="introduction">
          Hi, my name is <strong id="head-name" >Chris Tague</strong><br />
          I'm the developer you need.
        </h1>
        <p>
          <a className="link" href="#about">More about me</a><br/>
          <a className="link" href="#projects" >Jump to Projects</a>
        </p>
      </div>
    </header>
  );
}

export default Head;