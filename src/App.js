import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Section from './Section';
import Section2 from './Section2';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
         
      <h1 className="site-heading text-center text-white d-none d-lg-block">
        <span className="site-heading-lower">New Business Casual</span>
      </h1>

     <Nav />
    
    <Section />
    <Section2 />
    <Footer />
      </div>
    );
  }
}

export default App;
