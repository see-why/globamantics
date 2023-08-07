import './mainPage.css';
import FeaturedHouse from './featuredHouse';
import SearchResults from '../searchResults';
import HouseFromQuery from '../house/houseFromQuery';
import HouseFilter from './houseFilter';
import React from 'react';
import Header from './header';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HousesContext from '../context/houseContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const allHouses = useHouses()
  const featuredHouse = useFeaturedHouse(allHouses)

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle='Providing housing all over the world' />
          <HouseFilter />

          <Routes>
            <Route exact path="/" element={ <FeaturedHouse house={featuredHouse} /> } />
            <Route path="/searchResults/:country" element={ <SearchResults /> } />
            <Route path="/house/:id" element={ <HouseFromQuery /> } />
          </Routes>
        </div>
      </HousesContext.Provider>
    </Router>

  );
}

export default App;
