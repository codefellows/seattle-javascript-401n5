import React, { Fragment } from 'react';
import SweetContainer from './sweet/SweetContainer';
import SavoryContainer from './savory/SavoryContainer';

const Dashboard = () => {
  return (
    <Fragment>
      <SweetContainer />
      <SavoryContainer />
    </Fragment>
  );
};

export default Dashboard;