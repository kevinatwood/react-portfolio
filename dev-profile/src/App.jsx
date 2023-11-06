import { useState } from 'react'
import './App.css'
import AboutMe from './pages/AboutMe';
import Header from './components/Header';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe')
  function render(){
 switch(currentPage){
  case 'AboutMe': 
    return <AboutMe />
    break;

    case 'Contact': 
    return <Contact />
    break;

    case 'Portfolio': 
    return <Portfolio />
    break;

    case 'Resume': 
    return <Resume />
    break;
 }
  }

  return (
    <main>
<Header setCurrentPage={setCurrentPage}/> 
{render()}
</main>
  )
}

export default App
