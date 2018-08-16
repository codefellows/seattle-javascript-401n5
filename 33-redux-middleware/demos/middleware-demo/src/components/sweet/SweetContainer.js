import React from 'react';
import { connect } from 'react-redux';
import { addSweet } from '../../reducers/sweet';
import SweetForm from './SweetForm';
import SweetList from './SweetList';

const SweetContainer = (props) => {
  return (
    <section>
      <h2>Sweets</h2>
    <SweetForm buttonText="add sweet" onComplete={props.addSweet} />
    <SweetList sweets={props.sweets} />
    </section>
  );
};

const mapStateToProps = (state) => ({ sweets : state.sweetState.sweets });
const mapDispatchToProps = { addSweet };
export default connect(mapStateToProps, mapDispatchToProps)(SweetContainer);