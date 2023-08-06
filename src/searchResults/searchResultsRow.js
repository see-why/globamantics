import { useNavigate } from "react-router-dom";
import "./searchResults.css";
import React from "react";

const SearchResultsRow = ({ house }) => {
  const history = useNavigate();

  const setActive = () => {
    history.push(`/house/${house.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
