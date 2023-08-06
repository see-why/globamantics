import House from '../house'
import React from 'react';
import PropTypes from 'prop-types'

const FeaturedHouse = ({ house }) => {
    if(house){
      return (
        <div>
          <div className='row featuredHouse'>
            <h3 className='col-md-12 text -center'>Featured House</h3>
          </div>
          <House house={ house } />
        </div>
      );
    }
    return <div>No featured house at this time.</div>
}

FeaturedHouse.propTypes = {
  house: PropTypes.object.isRequired
}
 
export default FeaturedHouse;