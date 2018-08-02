import React from 'react';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
      </header>
    );
  }
}

export default Header;