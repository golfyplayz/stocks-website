import React from 'react';
import { useState, useEffect } from 'react';
import '../index.css';
import NavBar from '../components/nav';

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
  if (width < 800) {
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
      <div className="stocks"></div>
      <div className="info"></div>
      <div className="leader"></div>
    </div>
  </div>
  )}
}

export default Home;