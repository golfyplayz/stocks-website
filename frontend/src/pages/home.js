import React from 'react';
import { useState, useEffect } from 'react';
import '../home.css';
import NavBar from '../components/nav';
import Welcome from '../components/welcome';

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (width < 900) {
    return (
      <div id='main'>
        <NavBar width={width} />
        <div className="body">
          <div className="info"></div>
          <div className="leader"></div>
          <div className="stocks"></div>
        </div>
      </div>
  );} else {
    return (
    <div id='main'>
    <NavBar width={width} />
    <div className="body">
      <div className='welcome'><Welcome /></div>
      <div className='container'>
        <div className="stocks"></div>
        <div className="info"></div>
        <div className="leader"></div>
      </div>
    </div>
  </div>
  )}
}

export default Home;