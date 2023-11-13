import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css'
import AboutMe from './pages/AboutMe';
import Header from './components/Header';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer';


function App() {


const url = useLocation().pathname
console.log(url)

  function render(){
 switch(url){
  case '/': 
    return <AboutMe />
    break;

    case '/contact': 
    return <Contact />
    break;

    case '/portfolio': 
    return <Portfolio />
    break;

    case '/resume': 
    return <Resume />
    break;
 }
  }

  return (
    <main>
<Header /> 
{render()}
<Footer />
</main>
  )
}

export default App
