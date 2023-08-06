import logo from './logo.svg';
import './mainPage.css';
import FeaturedHouse from './featuredHouse';
import React, { useEffect, useState, useMemo } from 'react';
import Header from './header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [ allHouses, setAllHouses ] = useState([])

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch('/houses.json');
      const houses = await response.json();
      setAllHouses(houses);
    }

    fetchHouses();
  }, [])

  const featuredHouse = useMemo(() => {
    if(allHouses.length){
      const index = Math.floor(allHouses.length * Math.random())
      return allHouses[index]
    }
  },[allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle='Providing housing all over the world' />

        <Routes>
          <Route path="/" element={ <FeaturedHouse house={featuredHouse} /> } >
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
