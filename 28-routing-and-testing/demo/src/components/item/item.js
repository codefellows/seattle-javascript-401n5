import React from 'react';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <span>{this.props.items[this.props.match.params.id]}</span>
    );
  }

}