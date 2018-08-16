import React from 'react';
import PropTypes from 'prop-types';

const SweetList = (props) => {
  return (
    <ul>
      {props.sweets.map(sweet => <li key={sweet.id}>{sweet.name}</li>)}
    </ul>
  );
};

SweetList.propTypes = {
  sweets: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default SweetList;