import Head from './components/Head/Head';
import About from './components/About/About';
import profile from './assets/profile.jpg';
import Projects from './components/Projects/Projects';
import ProjectList from './components/Projects/ProjectList';
import Contact from './components/Contact/Contact';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  
  render() {
    return (
      <>
        <Head />
        <About profile={profile}/>
        <Projects projectList ={ProjectList}/>
        <Contact />
      </>
    );
  }
}

export default App;
