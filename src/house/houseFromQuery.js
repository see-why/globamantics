import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import HousesContext from "../context/houseContext";
import House from ".";

const HouseFromQuery = () => {
  const { id } = useParams();
  const allHouses = useContext(HousesContext);
  const house = allHouses.find((h) => h.id === parseInt(id));

  if (!house) return <div>House not found.</div>;
  return <House house={house}></House>;
};

export default HouseFromQuery;
