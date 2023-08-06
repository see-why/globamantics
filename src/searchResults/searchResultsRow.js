import { useNavigate } from "react-router-dom";
import "./searchResults.css";
import React from "react";
import PropTypes from 'prop-types'

const SearchResultsRow = ({ house }) => {
  const history = useNavigate();

  const setActive = () => {
    history(`/house/${house.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
};

SearchResultsRow.propTypes = {
  house: PropTypes.object.isRequired
}

export default SearchResultsRow;
