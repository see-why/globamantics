import React from 'react';
import { v1 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom'

const HouseFilter = ({ allHouses }) => {
  const history = useNavigate()

  const countries = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];
  countries.unshift(null);

  const onSelectChange = (e) => {
    const country = e.target.value;
    history(`/searchresults/${country}`);
  }

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSelectChange}>
          {countries.map((c) => (
            <option key={ uuid } value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;