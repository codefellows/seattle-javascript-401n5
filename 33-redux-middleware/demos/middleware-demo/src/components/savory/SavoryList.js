import React from 'react';
import PropTypes from 'prop-types';

const SavoryList = (props) => {
  return (
    <ul>
      {props.savories.map(savory => <li key={savory.id}>{savory.name}</li>)}
    </ul>
  );
};

SavoryList.propTypes = {
  savories: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default SavoryList;