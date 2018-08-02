import React from 'react';
import {Link} from 'react-router-dom';
import uuid from 'uuid/v4';
export default class Items extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id:'',
      text:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let id = uuid();
    let text = e.target.value;
    this.setState( {id,text} );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state);
  }

  render() {

    return (
      <div className="items">
        <form onSubmit={this.handleSubmit}>
          <input name="add" onChange={this.handleChange} />
        </form>
        <ul>
          {
            Object.keys(this.props.items).map( (id,i) =>
              <li key={id}>
                <Link to={`/item/${id}`}>{this.props.items[id]}</Link>
              </li>
            )
          }
        </ul>
      </div>
    );
  }

}