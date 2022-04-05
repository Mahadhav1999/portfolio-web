import React from 'react';
import './App.css';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Experience from './Components/Pages/Experience';
import Footer from './Components/Pages/Footer';
import Header from './Components/Pages/Header';
import Nav from './Components/Pages/Nav';
import Portfolio from './Components/Pages/Portfolio';
import Services from './Components/Pages/Services';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
