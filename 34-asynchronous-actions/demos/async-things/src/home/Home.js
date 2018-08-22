import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchThings } from '../store/thing';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchThings();
  }

  render() {
    return (
      <div>
        <h1>Things</h1>
        <ul>
          {this.props.things.map(thing => <li key={thing.id}>{thing.name}</li>)}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = ( things ) => ({ things });
const mapDispatchToProps = { fetchThings };

export default connect(mapStateToProps, mapDispatchToProps)(Home);


