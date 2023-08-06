import logo from './logo.svg';
import './mainPage.css';
import FeaturedHouse from './featuredHouse';
import SearchResults from '../searchResults';
import HouseFromQuery from '../house/houseFromQuery';
import HouseFilter from './houseFilter';
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
        <HouseFilter allHouses={allHouses} />

        <Routes>
          <Route exact path="/" element={ <FeaturedHouse house={featuredHouse} /> } />
          <Route path="/searchResults/:country" element={ <SearchResults allHouses={allHouses} /> } />
          <Route path="/house/:id" element={ <HouseFromQuery allHouses={allHouses} /> } />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
