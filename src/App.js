import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Newsletter from './Components/Newsletter';
import Cards from './Components/Cards';
import Footerr from './Components/Footerr';
import Course from './Components/Course';
function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Course/>
      <Newsletter/>
      <Cards />
      <Footerr/>
    </div>
  );
}

export default App;
