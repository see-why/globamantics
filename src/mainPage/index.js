import logo from './logo.svg';
import './mainPage.css';
import React, { useEffect, useState, useMemo } from 'react';
import Header from './header';

function App() {
  const [ allHouses, setAllHouses ] = useState([])

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch('/houses.json');
      const houses = await response.json();
      setAllHouses(allHouses);
    }

    fetchHouses();
  }, [])

  const featuredHouse = useMemo(() => {
    if(allHouses.length){
      const index = Math.floor(allHouses.lenght * Math.random())
      return allHouses[index]
    }
  },[allHouses]);

  return (
    <div className="container">
      <Header subtitle='Providing housing all over the world' />
    </div>
  );
}

export default App;
